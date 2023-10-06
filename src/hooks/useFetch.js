import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoints) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endPoints);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
};

export default useFetch;
