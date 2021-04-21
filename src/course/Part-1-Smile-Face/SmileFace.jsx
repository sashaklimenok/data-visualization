import React from 'react';

import {
  BackgroundCircle,
  Eyes,
  FaceMouth,
  SmileContainer
} from './components';

export const SmileFace = ({
  centerX,
  centerY,
  eyeOffsetY,
  eyeOffsetX,
  eyeSize,
  height,
  width,
  strokeWidth,
}) => {

  return (
    <SmileContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        radius={height / 2 - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        radius={eyeSize}
        eyeOffsetX={eyeOffsetY}
        eyeOffsetY={eyeOffsetX}
      />
      <FaceMouth
        mouthWidth={200}
        mouthRadius={0}
      />
    </SmileContainer>
  )
}