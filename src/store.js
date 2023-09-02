import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import staff from './reducers/staff'
import cabins from './reducers/cabins'


 export const  reducer = combineReducers ({
        staff,
        cabins
})

export const store = configureStore({
    reducer,
})

export default store;