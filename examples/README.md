### useDims() example App

This examples directory was bootstrapped using create-react-app and contains a simple example of react-dims in use.

To run the app, download the parent repo, navigate here to the examples directory, then install deps `npm i` and start app: `npm start`


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
