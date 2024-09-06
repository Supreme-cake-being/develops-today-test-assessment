import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;

export const useFetch = async (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${url}?format=json`);
        setLoading(false);
        setData(response.data);
      } catch (error) {
        const typedError = error as Error;
        setLoading(false);
        setError(typedError.message);
      }
    };
  }, [url]);

  return { data, loading, error };
};
