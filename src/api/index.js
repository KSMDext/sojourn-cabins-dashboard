import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1',
    headers: {
        
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTI4MzM5LCJpYXQiOjE2OTM1MTM5MzksImp0aSI6IjI1MGRhMGU1ZjQ1MjRjZTlhZDVkZDdhMzNhZDk2Y2ZjIiwidXNlcl9pZCI6Ijc1YzE1ZTg4LWFhZDYtNDRiZS1iOWI4LTQyZDc3OTcxMGY3OSJ9.x8aElmYbvdG_PN6MDtdz7cQQ2rgn8iL2lbF_dPBmtsQ'
    },
})