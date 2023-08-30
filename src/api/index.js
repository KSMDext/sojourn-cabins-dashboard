import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1',
    headers: {
        
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMzIxODYxLCJpYXQiOjE2OTMzMDc0NjEsImp0aSI6ImU1YmM1OWI5NDE5MTRkZWFhYWYwYmI4NTYzMzcwZGVhIiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.z7aOaqE3BLF1BRIt2oXeO0t3m2SyP_ECAiybhIPB90M'
    },
})