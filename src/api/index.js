import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1',
    headers: {
        
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNjgyNzEzLCJpYXQiOjE2OTM2NjgzMTMsImp0aSI6Ijg5NDVlYTcwMDU3YjQ4OTJhYjgyNzdlMjUwNmU1ODlkIiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.kcQanwapvLo3aN6c6-sSS7GYCmT1P1TN-ZE5eMqzzZI'
    },
})