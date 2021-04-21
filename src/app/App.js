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
} from '../constants/smileConstants';

function App() {
  return (
    <div className="App">
      <SmileFace
        centerX={CENTER_X}
        centerY={CENTER_Y}
        eyeOffsetY={EYE_OFFSET_Y}
        eyeOffsetX={EYE_OFFSET_X}
        eyeSize={EYE_SIZE}
        height={HEIGHT}
        width={WIDTH}
        strokeWidth={STROKE_WIDTH}
      />
    </div>
  );
}

export default App;