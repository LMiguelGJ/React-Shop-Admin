import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    massage: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });

  const toggedAlert = () => {
    setAlert(!alert.active);
  };
  return {
    alert,
    setAlert,
    toggedAlert: toggedAlert,
  };
};

export default useAlert;
