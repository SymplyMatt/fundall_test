import axios from 'axios';

export default async function sendRequest(method, endpoint, data = null, token = null) {
  const baseURL = 'https://expense-api.fundall.io'; 
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
    return response;
  } catch (error) {
    console.error('Request error:', error);
  }
}
