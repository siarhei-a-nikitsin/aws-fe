import Axios from 'axios';

const BACKEND_BASE_URL = 'https://89u84drm88.execute-api.eu-west-1.amazonaws.com';

export const axios = Axios.create({
  baseURL: BACKEND_BASE_URL
});

export default axios;
