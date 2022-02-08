/* eslint-disable max-len */
import axios from 'axios';

const PORT = process.env.NODE_ENV !== 'production' ? '3000' : '4000';

const client = axios.create({
  baseURL: `http://localhost:${PORT}/data`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default client;
