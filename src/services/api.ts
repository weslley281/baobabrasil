import axios from 'axios';

const api = axios.create({
  baseURL: 'https://baobabrasil.com.br/apiBaoba',
});

export default api;
