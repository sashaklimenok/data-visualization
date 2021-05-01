export const Mark = ({ data, xScale, yScale, xValue, yValue }) => (
  data.map((item, i) => (
    <g
      key={i}
      transform={`translate(${xScale(xValue(item))}, ${yScale(yValue(item))})`}>
      <circle
        r={5}
        fill={'red'}
      />
      <title>{xValue(item)}</title>
    </g>
  ))
)