export const AxisLeft = ({yScale}) => (
  yScale.domain().map((domainValue) => (
    <g
      key={domainValue}
      className={'domain-element'}
      transform={`translate(0, ${yScale(domainValue)})`}
    >
      <text
        x={-3}
        textAnchor={'end'}
        dy={'.32em'}>
        {domainValue}
      </text>
    </g>
  ))
)