# react-clingy

Position elements relative to each other in React.

## Example

```js
import Clingy from 'react-clingy';

// Inside a render method
<div ref={(ref) => { this.targetRef = ref; }}>Target</div>
...
<Clingy target={this.targetRef} from="25%-10 top" to="left 75%">
  <div>Element to position</div>
</Clingy>
```
