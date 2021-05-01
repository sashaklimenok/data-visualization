import React from 'react';
import { scaleLinear, extent } from 'd3';
import { withLoading } from '../../../HOC/withLoading';
import {
  width,
  height,
  innerWidth,
  innerHeight,
  margin,
  xAxisLabel,
  xAxisLabelOffset,
  yAxisLabel,
  yAxisLabelOffset
} from '../constants';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Mark } from './Mark';

const ScatterplotContainerUI = ({ data }) => {

  console.log(data);

  const xValue = (data) => data.sepal_length;
  const yValue = (data) => data.sepal_width;

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <g className={'axisLeft'}>
          <text
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${innerHeight /2}) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} />
        </g>
        <g
          className={'marks'}
        >
          <Mark
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            data={data}
          />
        </g>
        <g className={'axisBottom'}>
          <AxisBottom xScale={xScale} />
        </g>
        <g transform={`translate(${innerWidth / 2}, ${innerHeight + xAxisLabelOffset})`}>
          <text textAnchor={'middle'}>
            {xAxisLabel}
          </text>
        </g>
      </g>
    </svg>
  )
}

export const ScatterplotContainer = withLoading(ScatterplotContainerUI)