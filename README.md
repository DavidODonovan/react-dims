## react-dims

A simple React Context that captures the dimensions of any React DOM node. Requires React version 16.0.0 or greater. 

###Installation

```code
npm i react-dims
```
###Usage 

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




