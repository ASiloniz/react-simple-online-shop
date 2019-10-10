import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getProducts() {
    return axios.get(`${BASE_URL}/api/products`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err.response ? err.response.data:err)
        })
}