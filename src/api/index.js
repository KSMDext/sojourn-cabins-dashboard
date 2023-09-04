import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1',
    headers: {
        
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzODMyNzg0LCJpYXQiOjE2OTM4MTgzODQsImp0aSI6IjdhZTI0NTk3NDJhYjQ3YjI4NTViNDcyYWEyOGVjMjVkIiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.OGZRyc5HJh8JAevO73tQaxR_uUU-YCBjsFblWOd6aVo'
    },
})