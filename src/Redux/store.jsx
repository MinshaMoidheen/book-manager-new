import bookSlice from './bookSlice'
import { configureStore } from "@reduxjs/toolkit";

export const bookStore=configureStore({
    reducer:{
        bookReducer:bookSlice
    }
})


