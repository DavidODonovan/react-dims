## react-dims

A simple React Context component can be used to wrap a child component, capture the dimensions of that child, then pass those dims down as props to the child, thereby making that child component aware of what it's dimensions are.

Useful for things like wrapping a responsive D3 chart.

Requires React version 16.0.0 or greater. 

### Installation

```code
npm i react-dims
```
### Usage 

ParentNode.js

```code
import { Provider } from 'react-dims';
 
const ParentNode=()=>{
	return (
              <Provider>
                  <ChildNode/>
              </Provider>
	       )
}
export default ParentNode;

```

ChildNode.js

```code
import { withContext } from 'react-dims';

const ChildNode=({dims})=>{  
	return (
                <div>height is: {dims.height}</div
	       )

}

export default withContext(ChildNode);
```




