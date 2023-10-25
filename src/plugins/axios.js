import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost/API-Mundo-Senai/public/api/', //url base da sua api
timeout: 5000 //tempo máximo de espera de resposta
});

export default api