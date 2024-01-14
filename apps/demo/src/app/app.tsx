import { Sketch } from '@bluemojo/sketch';
import { Colorful } from '@bluemojo/colorful';

export function App() {
  return (
    <div
      style={{
        width: 1024,
        maxWidth: '100%',
        margin: '100px auto',
        fontFamily: 'Roboto',
      }}
    >
      <h1
        style={{ fontFamily: 'Rubik Doodle Shadow', fontSize: 148, margin: 0 }}
      >
        <span style={{ color: 'blue' }}>BLUE</span>MOJO
      </h1>
      <p style={{ fontSize: 20, margin: '16px 0 0 0' }}>
        Packages suite for cover different aspects of working with colors on
        web. It includes conversion utils, basic elements to build any color
        component needed during product development and some prebuild color
        pickers.
      </p>
      <p style={{ fontSize: 20, margin: '16px 0 0 0' }}>
        Repo link: <a href="https://github.com/indy-dough/bluemojo">github</a>
      </p>

      <h3 style={{ fontSize: 40, margin: 0, marginTop: 32 }}>Pickers:</h3>
      <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
        <Sketch style={{ boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 2px' }} />
        <Colorful />
      </div>
    </div>
  );
}

export default App;
