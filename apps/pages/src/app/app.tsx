import { Sketch } from '@bluemojo/sketch';
import { Colorful } from '@bluemojo/colorful';
import { Chrome } from '@bluemojo/chrome';

export function App() {
  return (
    <>
      <h3 style={{ fontSize: 40, margin: 0, marginTop: 32 }}>Pickers:</h3>
      <div
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'flex-start',
          marginTop: 16,
        }}
      >
        <Sketch style={{ boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px' }} />
        <Chrome style={{ boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px' }} />
        <Colorful />
      </div>
    </>
  );
}

export default App;
