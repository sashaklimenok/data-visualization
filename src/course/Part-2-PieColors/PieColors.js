import React, { useEffect, useState } from 'react';
import { csv, arc, pie } from 'd3';

import { CSV_URL } from './constants';
import { CENTER_X, CENTER_Y, HEIGHT, WIDTH } from '../../constants/constants';

export const PieColors = () => {
  const [data, setDate] = useState(null);

  const drawPie = arc()
    .innerRadius(0)
    .outerRadius(WIDTH)

  useEffect(async () => {
    const data = await csv(CSV_URL);
    setDate(data);
  },[])

  if (!data) {
    return 'Loading...'
  }

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <g transform={`translate(${CENTER_X}, ${CENTER_Y})`}>
        {
          pie().value(1)(data).map((d) => (
                <path
                  key={d.data['Keyword']}
                  fill={d.data['RGB hex value']}
                  d={drawPie(d)}
                />
          ))
          // data && data.map((d, i) => {
          //   return (
          //     <path
          //       key={d['Keyword'] + i}
          //       fill={d['RGB hex value']}
          //       d={drawPie({
          //         startAngle: (i / data.length) * 2 * Math.PI,
          //         endAngle: ((i + 1) / data.length) * 2 * Math.PI
          //       })}
          //     />
          //   )
            // return i === 1 ? (
            //   <path
            //     key={d['Keyword'] + i}
            //     fill={d['RGB hex value']}
            //     d={drawPie({
            //       startAngle: (i / data.length) * Math.PI,
            //       endAngle: ((i + 1) / data.length) * Math.PI
            //     })}
            //   />
            // ) : <div></div>
          })
        }
      </g>
    </svg>
  )

}