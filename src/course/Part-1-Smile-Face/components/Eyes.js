import React from 'react';
import { FaceEye } from './FaceEye';

export const Eyes = ({ radius, eyeOffsetX, eyeOffsetY }) => {
  return (
    <g>
      <FaceEye
        radius={radius}
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
      />
      <FaceEye
        radius={radius}
        cx={+eyeOffsetX}
        cy={-eyeOffsetY}
      />
    </g>
  )
}