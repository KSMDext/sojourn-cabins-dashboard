import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import staff from './reducers/staff'
import locationReducer from "./reducers/Location";

// const initialState = {
//     Locations: [], // Initialize with an empty array
//   };

 export const  reducer = combineReducers ({
        staff,
        location: locationReducer
})

export const store = configureStore({
    reducer,
})

export default store;