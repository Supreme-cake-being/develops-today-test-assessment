import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<Record<string, any>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API + `/${url}?format=json`
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      const typedError = error as Error;
      setError(typedError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, fetchData };
};
