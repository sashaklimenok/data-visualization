import React, { useEffect, useState } from 'react';
import { csv } from 'd3';
import { compose, slice } from 'lodash/fp';
import { addPopulateColumn, getYScale, getXScale, yValue, xValue } from './utils';
import { HEIGHT, WIDTH } from '../../constants/constants';
import { AxisBottom, AxisLeft, RectBar } from './chunks';

const DATA_URL = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const margin = {
  top: 20,
  left: 200,
  bottom: 20,
  right: 20,
}
const innerWidth = WIDTH - margin.left - margin.right;
const innerHeight = HEIGHT - margin.top - margin.bottom;

export const ChartBar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(DATA_URL, addPopulateColumn).then(
      data => compose(
        setData,
        slice(0, 10)
      )(data)
    );
  }, [])

  if (!data) return 'Loading...'

  const yScale = getYScale(data, innerHeight);
  const xScale = getXScale(data, innerWidth);

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      style={{ border: '2px solid red' }}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft yScale={yScale} />
        <RectBar
          data={data}
          xScale={xScale}
          yScale={yScale}
          yValue={yValue}
          xValue={xValue}
        />
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
      </g>
    </svg>
  )
}