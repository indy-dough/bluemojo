# @bluemojo/chrome

This is a package for chrome color picker

## Installation

```sh
npm install @bluemojo/chrome
```

## Examples

```jsx
import { Chrome } from '@bluemojo/chrome';

function Component() {
  const [color, setColor] = useState('#FF0000');
  
  return <Chrome value={color} onChange={setColor} />;
}
```
