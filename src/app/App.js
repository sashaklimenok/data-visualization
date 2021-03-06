import { SmileFace } from '../course/Part-1-Smile-Face/SmileFace';
import {
  CENTER_X,
  CENTER_Y,
  EYE_OFFSET_X,
  EYE_OFFSET_Y,
  EYE_SIZE,
  WIDTH,
  HEIGHT,
  STROKE_WIDTH
} from '../constants/constants';
import { PieColors } from '../course/Part-2-PieColors/PieColors';
import { ChartBar } from '../course/Part-3-ChartBar/ChartBar';
import { Scatterplot } from '../course/Part-4-Scatterplot/Scatterplot';

function App() {
  return (
    <div className="App">
      {/*<SmileFace*/}
      {/*  centerX={CENTER_X}*/}
      {/*  centerY={CENTER_Y}*/}
      {/*  eyeOffsetY={EYE_OFFSET_Y}*/}
      {/*  eyeOffsetX={EYE_OFFSET_X}*/}
      {/*  eyeSize={EYE_SIZE}*/}
      {/*  height={HEIGHT}*/}
      {/*  width={WIDTH}*/}
      {/*  strokeWidth={STROKE_WIDTH}*/}
      {/*/>*/}
      {/*<PieColors />*/}
      {/*<ChartBar />*/}
      <Scatterplot />
    </div>
  );
}

export default App;
