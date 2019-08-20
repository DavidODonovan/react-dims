## react-dims

React-dims is a dimensions provider for React components, enabling you to make any React component self-aware of it's own DOM width, height, x and y coords, by passing them down as props.

Use the react-dims Provider to wrap a child component, capture the dimensions of that child, then pass those dims down as props to that same child. When the component is resized, props are updated, so the child is always aware of what it's own dimensions are.

Useful for things like wrapping a responsive D3 chart.

Requires React version 16.0.0 or greater.

### Installation

```code
npm i react-dims
```
### Usage

Wrap the child node in the provider, similar to using a HOC.

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
***

Export the child by passing it to the withContext( ) method, similar to using Redux connect( ).

ChildNode.js

```code
import { withContext } from 'react-dims';

const ChildNode=({dims})=>{  
  return (
    <div>height is: {dims.height}</div>
  )
}

export default withContext(ChildNode);
```

Leverages the native JavaScript Element.getBoundingClientRect() method, so props.dims will be an object that looks something like this;

```code
{
  bottom: 113,
  height: 16,
  left: 213.015625,
  right: 286.96875,
  top: 97,
  width: 73.953125,
  x: 213.015625,
  y: 97
}
```
### Usage with Redux

If your child component happens to be directly connected to Redux, for example to fetch data, just feed the component to the withContext( ) method, then wrap that entire statement with connect ( ) like so;

```code

export default connect(mapStateToProps, { fetchData })(withContext(ChildNode));

```
