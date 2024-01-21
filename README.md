# [Bluemojo](https://indy-dough.github.io/bluemojo/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/indy-dough/bluemojo/blob/main/LICENSE)

Bluemojo is a set of JavaScript libraries for using color pickers or building your own.

## Features

- Predefined pickers
- Ability to create any custom picker
- Separate package for [color utils](./libs/utils/README.md)
- TypeScript support
- No dependencies

## Installation

```sh
npm install @bluemojo/sketch
npm install @bluemojo/chrome
npm install @bluemojo/colorful

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

## Issues

To use webpack 5 and React 17, you must include the alias in the webpack configuration.

```js
resolve: {
  alias: {
    'react/jsx-runtime': require.resolve('react/jsx-runtime'),
  },
},
```

### License

Bluemojo is [MIT licensed](./LICENSE).
