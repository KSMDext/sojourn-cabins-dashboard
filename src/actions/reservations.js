import {addSuccess, setLoading, loadSuccess, errorLoading} from '../reducers/reservation';
import { api } from '../api';
import {stringify} from 'qs';
export const loadReservation = () => async dispatch => {
  dispatch(setLoading());
  try {
    console.log("Is supposed to load the data!!!!!")
    await api
      .get("/reservations/")
      .then(response => {
        console.log("I will ",response.data)
        dispatch(loadSuccess(response.data))
      });
  } catch (error) {
    console.log("we caught an error", error)
    dispatch(errorLoading(error.message))
  }
  }
  
  export const addReservation = (reservationData) => async dispatch => {
    dispatch(setLoading());
    try {
      console.log("Is supposed to add  data!!!!!", reservationData)
      const data = stringify(reservationData)
      console.log("Is supposed to add  data!!!!!", reservationData)
      await api
        .post("/reservations/", reservationData)
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


    
  