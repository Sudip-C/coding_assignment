import axios from 'axios';

const API_URL = 'https://636bd1987f47ef51e13b4348.mockapi.io/Products';

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data ;
};
