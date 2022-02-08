import React, { useEffect, useState } from 'react';
import { getMoviesBySearchText } from '../services';
import { MovieItemInterface } from '../services/types';

interface UseGetMoviesBySearchResponse {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  data: MovieItemInterface[];
}
export default function useGetMoviesBySearchText(): UseGetMoviesBySearchResponse {
  const [value, setValue] = useState<string>('');
  const [data, setData] = useState<MovieItemInterface[]>([]);
  const [error, setError] = useState<boolean>(false);

  async function getData() {
    const res = await getMoviesBySearchText(value);
    if (res.error === false) {
      if (res.data.length === 0 && value !== '') {
        setError(true);
      } else {
        setError(false);
      }
      setData(res.data);
    }
  }
  useEffect(() => {
    if (value === '') {
      setData([]);
    }
    getData();
  }, [value]);
  return {
    value,
    setValue,
    error,
    data,
  };
}
