# @bluemojo/colorful

This is a package for colorful color picker

## Installation

```sh
npm install @bluemojo/colorful
```

## Examples

```jsx
import { Colorful } from '@bluemojo/colorful';

function Component() {
  const [color, setColor] = useState('#FF0000');
  
  return <Colorful value={color} onChange={setColor} />;
}
```
