import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import staff from './features/staff.slice'
import locationReducer from "./features/location.slice";


 export const  reducer = combineReducers ({
        staff,
        location: locationReducer
})

export const store = configureStore({
    reducer,
})

export default store;