import { scaleLinear, csv } from 'd3';
import { useState, useEffect } from 'react';
import { ScatterplotContainer } from './components/ScatterplotContainer';
import { mapRows } from './utils';
import { csvUrl } from './constants';

export const Scatterplot = () => {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    csv(csvUrl, mapRows)
      .then((data) => {
        setData(data);
        setIsLoading(false)
      });
  }, [])


  return (
    <ScatterplotContainer isLoading={isLoading} data={data} />
  )
}