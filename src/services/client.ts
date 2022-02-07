import axios from 'axios';

const client = axios.create({
  baseURL: './data',
});

export default client;
