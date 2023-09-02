import {addSuccess, setLoading, loadSuccess, errorLoading} from '../reducers/cabins';
import { api } from '../api';
import {stringify} from 'qs'


export const loadCabins = () => async dispatch => {
  dispatch(setLoading());
  try {
    console.log("Is supposed to load the data!!!!!")
    await api
      .get("/cabins/")
      .then(response => {
        console.log("I will ",response.data)
        dispatch(loadSuccess(response.data))
      });
  } catch (error) {
    console.log("we caught an error", error)
    dispatch(errorLoading(error.message))
  }
  }
  export const addCabins = (cabinsData) => async dispatch => {
    dispatch(setLoading());
    try {
      console.log("Is supposed to add  data!!!!!", cabinsData)
      const data = stringify(cabinsData)
      console.log("Is supposed to add  data!!!!!", data)
      await api
        .post("/cabins/", cabinsData)
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


    
  