import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL, // get this guy out into an environment variable
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzODcyODg0LCJpYXQiOjE2OTM4NTg0ODQsImp0aSI6ImE0ZjJmMmViMzBkYzQwNDg4NDQwZDlmODFiMmU5ZGE4IiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.97IHSxL-E9ligAzVBhjQH4u6hzQZhJrTm8DwWI4YP4k'
        // Put the token in the store, and read it from the store 
    },
})