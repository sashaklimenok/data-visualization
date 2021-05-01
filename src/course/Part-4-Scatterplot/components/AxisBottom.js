import { innerHeight } from '../constants';

export const AxisBottom = ({ xScale }) => (
  xScale.ticks().map((tick, i) => (
    <g
      key={i}
      transform={`translate(${xScale(tick)}, ${innerHeight})`}
    >
      <text
        textAnchor={'end'}
        fill={'#212121 '}
        fontSize={14}
        dy={'1em'}
        dx={'.32em'}
      >
        { tick }
      </text>
      <line stroke={'#e0e0e0'} y2={-innerHeight}/>
    </g>
  ))
)