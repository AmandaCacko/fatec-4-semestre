import axios, { AxiosInstance } from "axios";

function api(): AxiosInstance {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'http://localhost:3001/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export default api;
