// frontend/src/api/client.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getPizzas = async () => {
    const res = await axios.get(`${API_URL}/pizzas`)
    return res.data
}

export const createPizza = async (pizza) => {
    const res = await axios.post(`${API_URL}/pizzas`, pizza)
    return res.data
}
