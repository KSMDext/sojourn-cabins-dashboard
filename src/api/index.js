import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1',
    headers: {
        
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzOTQ5MDEzLCJpYXQiOjE2OTM5MzQ2MTMsImp0aSI6ImIzY2NhMGFhYTc5OTQzYWJhNWUwODQyYzc2OTdiYThiIiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.3_Vlf7dPNWcBPeAUv91wZYKt0XYD1TOExz8QSbLDkfg'
    },
})