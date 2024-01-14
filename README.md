# Bluemojo &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/indy-dough/bluemojo/blob/main/LICENSE)

Bluemojo is a set of JavaScript libraries for using color pickers or building your own.

## Features

- Predefined pickers
- Ability to create any custom picker
- Separate package for converting color schemas
- TypeScript support
- No dependencies

## Installation

```sh
npm install @bluemojo/colorful
npm install @bluemojo/sketch
npm install @bluemojo/elements
npm install @bluemojo/utils
```

## Examples

```jsx
import { Sketch } from '@bluemojo/sketch';

function Component() {
  const [color, setColor] = useState('#FF0000');
  
  return <Sketch value={color} onChange={setColor} />;
}
```

### License

Bluemojo is [MIT licensed](./LICENSE).
