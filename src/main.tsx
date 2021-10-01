import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from "react-redux"
import { configureStore, Action } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
import { ProductState} from './features/productSlice';
import productsSliceReducer from "./features/productSlice"


export type AppThunk = ThunkAction<void, ProductState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    productsStore: productsSliceReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
