import { configureStore, Action } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
import { ProductState} from './features/productSlice';
import productsSliceReducer from "./features/productSlice"


export type AppThunk = ThunkAction<void, ProductState, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    productsStore: productsSliceReducer,
  },
});