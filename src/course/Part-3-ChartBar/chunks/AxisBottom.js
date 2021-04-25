export const AxisBottom = ({ xScale, innerHeight }) => (
  xScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      className={'tick-element'}
      transform={`translate(${xScale(tickValue)}, 0)`}
    >
      <line
        y2={innerHeight}
        stroke={'black'}
      />
      <text
        y={innerHeight + 3}
        textAnchor={'middle'}
        dy={'.71em'}
      >
        { tickValue }
      </text>
    </g>
  ))
)