import React from 'react';

export const SmileContainer = ({
  children,
  width,
  height,
  centerY,
  centerX
}) => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      {children}
    </g>
  </svg>
)