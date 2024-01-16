import { Sketch } from '@bluemojo/sketch';
import { Colorful } from '@bluemojo/colorful';
import { Chrome } from '@bluemojo/chrome';

export function App() {
  return (
    <div
      style={{ display: 'flex', gap: 24, margin: 40, alignItems: 'flex-start' }}
    >
      <Sketch style={{ boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px' }} />
      <Chrome
        defaultValue={'#141414'}
        style={{ boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px' }}
      />
      <Colorful />
    </div>
  );
}

export default App;
