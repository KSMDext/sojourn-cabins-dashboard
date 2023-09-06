import {addSuccess, setLoading, loadSuccess, errorLoading} from '../reducers/staff';
import { api } from '../api';
import {stringify} from 'qs';

export const loadStaff = () => async dispatch => {
  dispatch(setLoading());
  try {
    console.log("Is supposed to load the data!!!!!")
    await api
      .get("/employees/")
      .then(response => {
        console.log("I will ",response.data)
        dispatch(loadSuccess(response.data))
      });
  } catch (error) {
    console.log("we caught an error", error)
    dispatch(errorLoading(error.message))
  }
  }
  
  export const addStaff = (staffData) => async dispatch => {
    dispatch(setLoading());
    try {
      console.log("Is supposed to add  data!!!!!", staffData)
      const data = stringify(staffData)
      console.log("Is supposed to add  data!!!!!", staffData)
      await api
        .post("/employees/", staffData)
        .then(response => {
          console.log("I will ",response.data)
          dispatch(addSuccess(response.data))
        });
    } catch (error) {
      console.log("we caught an error", error)
      dispatch(errorLoading(error.message))
    }
    }

    // edit staff

    // delete staff


    
  