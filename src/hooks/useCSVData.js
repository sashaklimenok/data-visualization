import { csv } from 'd3';
import { useEffect, useState } from 'react';

export const useCSVData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(setData);
  }, [url])

  return data;
}