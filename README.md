## react-dims

React-dims is a dimensions provider for React components, enabling you to make any React component self-aware of it's own width, height, x and y coordinates, by passing them down as props.

When the component is resized, props are updated, so the component is always aware of what it's own dimensions are.

Useful for things like wrapping a responsive D3 chart.

Requires React version 16.8.0 or greater.

### Installation

```code
npm i react-dims
```
### Usage
Use the react-dims Provider to wrap a child component, just like using any other Higher Order Component;

App.js

```code
import { Provider } from 'react-dims';
import ChildNode from './ChildNode';

const App=()=>{
  return (
    <div className='myLayout'>
      <Provider>
        <ChildNode className='coolThing'/>
      </Provider>
    <div>
  )
}

export default App;
```

Export the child component by passing it to the react-dims withContext( ) method, similar to using Redux connect( );

ChildNode.js

```code
import { withContext } from 'react-dims';

const ChildNode=({dims})=>{  
  return (
    <div>My height is: {dims.height}!</div>
  )
}

export default withContext(ChildNode);
```

Leverages the native [.getBoundingClientRect(  )](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) method, so props.dims will be an object that looks something like this;

```code
{
  bottom: 113,
  height: 160,
  left: 213.015625,
  right: 286.96875,
  top: 97,
  width: 73.953125,
  x: 213.015625,
  y: 97
}
```

### Adjusting Debounce Timer

When your component is resized, the Provider is throttled to fire at a default rate of once every 100ms. You can change the rate by simply passing the provider a prop of 'debounce' with a value which is a number, like so;

```code
<Provider debounce={300}>
  <ChildNode/>
</Provider>
```

### Usage with Redux

If your child component happens to be directly connected to Redux, for example to fetch data, just feed the component to the withContext( ) method, then wrap that entire statement with connect ( ) like so;

```code

export default connect(mapStateToProps, { fetchData })(withContext(ChildNode));

```
