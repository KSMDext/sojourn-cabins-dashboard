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

      const transformedCabinsData = {...cabinsData, beds: [cabinsData?.beds]}

      console.log("transformedCabinsData", transformedCabinsData);

      // TODO: use FormData() to construct form data to be sent to the backend

      // const data = stringify(cabinsData)
      console.log("Is supposed to add  data!!!!!", cabinsData)
      await api
        .post("/cabins/",  transformedCabinsData, {"Content-Type": "multipart/form-data boundary=$afadf{anyrandomdata}"})
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


    
  