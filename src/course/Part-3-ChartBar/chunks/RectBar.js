export const RectBar = ({ data, yScale, xScale, yValue, xValue }) => (
  data.map((item) => {
    return (
      <g
        className={'rect-element'}
        key={yValue(item)}
        transform={`translate(0, ${yScale(yValue(item))})`}
      >
        <rect
          height={yScale.bandwidth()}
          width={xScale(xValue(item))}
        />
      </g>
    )
  })
)