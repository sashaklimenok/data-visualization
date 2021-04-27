import { scaleBand, scaleLinear, max } from 'd3';

export const yValue = item => item.Country;
export const xValue = item => item.Population;

export const addPopulateColumn = (data) => {
  data.Population = Number(data['2020']);
  return data;
}

export const getYScale = (data, height) => scaleBand()
  .domain(data.map(yValue))
  .range([0, height])
  .paddingInner(0.2)

export const getXScale = (data, width) => scaleLinear()
  .domain([0, max(data, xValue)])
  .range([0, width])