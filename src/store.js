import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import staff from './reducers/staff'

 export const  reducer = combineReducers ({
        staff
})

export const store = configureStore({
    reducer,
})

export default store;