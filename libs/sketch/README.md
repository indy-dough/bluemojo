# @bluemojo/sketch

This is a package for sketch color picker

## Installation

```sh
npm install @bluemojo/sketch
```

## Examples

```jsx
import { Sketch } from '@bluemojo/sketch';

function Component() {
  const [color, setColor] = useState('#FF0000');
  
  return <Sketch value={color} onChange={setColor} />;
}
```
