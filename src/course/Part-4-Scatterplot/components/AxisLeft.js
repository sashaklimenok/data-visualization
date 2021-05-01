import { innerWidth } from '../constants';

export const AxisLeft = ({ yScale }) => {
  return (
    yScale.ticks().map((tick, i) => (
      <g
        key={i}
        transform={`translate(0, ${yScale(tick)})`}
      >
        <text
          textAnchor={'end'}
          fill={'#212121 '}
          fontSize={14}
          dy=".32em"
          dx="-1em"
        >
          {tick}</text>
        <line stroke={'#e0e0e0'} x2={innerWidth} />
      </g>
    ))
  )
}