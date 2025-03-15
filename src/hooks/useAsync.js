import { useState, useCallback } from 'react';

const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (...params) => {
    try {
      setLoading(true);
      setError(null);
      const response = await asyncFunction(...params);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  return { execute, loading, error, data };
};

export default useAsync; 