import axios from "axios"

const api = axios.create({
    baseURL: 'https://exercicio-api.onrender.com'
})

export default api
