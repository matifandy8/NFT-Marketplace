import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { supabase } from "../libs/client"
import { AppThunk } from "../store"
import { ProductItem } from "../types"


export interface ProductState {
  products: ProductItem[];
  loading: boolean;
  errors: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  errors: "",
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },

    setProducts: (state, { payload }: PayloadAction<ProductItem[]>) => {
      state.products = payload
    },
  },
})

export const { setLoading, setErrors, setProducts } = productSlice.actions

export default productSlice.reducer

export const productsSelector = (state: { productsStore: ProductState }) =>
  state.productsStore


  export const getProducts = (): AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true))
      try {
        // const baseURL: string = "https://api-cripto.herokuapp.com/currencies"  
        // const res = await axios.get(`${baseURL}`)
        let { data: products, error }:any = await supabase.from("products").select("*");
        dispatch(setLoading(false))
        dispatch(setProducts(products))
      } catch (error:any) {
        dispatch(setErrors(error))
        dispatch(setLoading(false))
      }
    }
  }