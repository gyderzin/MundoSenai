import axios from 'axios'

const api = axios.create({
baseURL: 'https://b551-2804-d59-bf9d-9600-5f1-bab9-9883-969d.ngrok-free.app/API-Mundo-Senai/public/api/', //url base da sua api
timeout: 5000 //tempo máximo de espera de resposta
});

export default api