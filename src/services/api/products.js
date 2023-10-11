import axios from 'axios';
import endPoints from '@services/api';

const addProducts = async (body) => {
  const config = {
    Headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProducts(id));
  return response.data;
};

const updateProduct = async (id, body) => {
  const config = {
    Headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config);
  return response.data;
};

export { addProducts, deleteProduct, updateProduct };
