import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1',
    headers: {
        
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MDM4OTg5LCJpYXQiOjE2OTQwMjQ1ODksImp0aSI6ImY2MGIzYmU0ZWVhMjQzN2Y5MWQ0YzFmZjA3MGVlYjBlIiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9._cWyuWfGRuJxAfkvl3l9ZueUVih6S_n9DuGatoNRYZw'
    },
})