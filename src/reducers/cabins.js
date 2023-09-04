import {createSlice} from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'cabin',
    initialState:{
        cabins: [],
        cabin: null,
        loading: true,
        error: false,
    },

    reducers:{
        loadSuccess: (state,action) => {
            state.cabins =action.payload.results;
            state.loading = false;
        },
        addSuccess: (state,action) => {
            state.cabin =action.payload;
            state.loading = false;
        },
        // edit success

        setLoading: state =>{
            state.loading = true;
        },

        errorLoading: (state,action) =>{
            state.error = action.payload;
            state.loading = false;
        }
    }
        

})
export const {loadSuccess, setLoading,errorLoading, addSuccess} = slice.actions

export default slice.reducer

