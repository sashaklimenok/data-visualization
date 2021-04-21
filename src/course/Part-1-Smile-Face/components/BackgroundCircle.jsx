import React from 'react';

export const BackgroundCircle = ({ radius, strokeWidth }) => (
  <circle
    r={radius}
    stroke='black'
    strokeWidth={strokeWidth}
    fill={'yellow'}
  />
)