### useDims() example

```code
import { useDims } from 'react-dims';

const Dashboard=()=>{
  const [domNode, dims] = useDims();

  return (
    <div
      ref={domNode}
      className="gridLayout"
      >
      My height is: {dims.height}
      <br/>
      My width is: {dims.width}
    </div>
    );
};

```
