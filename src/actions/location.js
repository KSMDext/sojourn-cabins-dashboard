import {addSuccess, setLoading, loadSuccess, errorLoading} from '../reducers/Location';
import { api } from '../api';
import {stringify} from 'qs'
export const loadLocation = () => async dispatch => {
  dispatch(setLoading());
  try {
    console.log("Is supposed to load the data!!!!!")
    await api
      .get("/locations/")
      .then(response => {
        console.log("I will ",response.data)
        dispatch(loadSuccess(response.data))
      });
  } catch (error) {
    console.log("we caught an error", error)
    dispatch(errorLoading(error.message))
  }
  }
  export const addLocation = (locationData) => async dispatch => {
    dispatch(setLoading());
    console.log()
    try {
      console.log("Is supposed to add  data!!!!!", locationData)
      const data = stringify(locationData)
      console.log("Data:", data);
      console.log("Is supposed to add  data!!!!!", locationData)
      await api
        .post("/locations/", locationData)
        .then(response => {
          console.log("I will ",response.data)
          dispatch(addSuccess(response.data))
        });
    } catch (error) {
      console.log("we caught an error", error)
      dispatch(errorLoading(error.message))
    }
    }

    export const setToken = (token) => ({
        type: 'SET_TOKEN',
        payload: token,
      });

    // edit location

    // delete location


    
  