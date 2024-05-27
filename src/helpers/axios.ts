import axios from "axios"

const api = axios.create({
    // baseURL: 'https://exercicio-api.onrender.com',
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api
