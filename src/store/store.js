import { configureStore } from "@reduxjs/toolkit";
import drumReducer from "./slice/drumSlice";
export default configureStore({
    reducer:{
        drums: drumReducer
    }
})