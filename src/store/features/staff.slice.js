import {createSlice} from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'staff',
    initialState:{
        staff: [],
        staff_: null,
        loading: true,
        error: false,
    },

    reducers:{
        loadSuccess: (state,action) => {
            state.staff =action.payload;
            state.loading = false;
        },
        addSuccess: (state,action) => {
            state.staff_ =action.payload;
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

