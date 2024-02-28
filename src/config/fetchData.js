const axios = require('axios');

export default async function sendRequest(method, endpoint, data = null, token = null) {
  const baseURL = 'https://gjcrecycling-f7fa9435192b.herokuapp.com/woven/test'; 
  const url = `${baseURL}${endpoint}`;

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error('Request error:', error);
  }
}
