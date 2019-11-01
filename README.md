<p align="center"><img src="https://user-images.githubusercontent.com/16183533/64230129-459f6f80-cf2f-11e9-8cda-fe1569227458.png" width=250></p>
<h2 align="center">React Dims</h2>
<p align="center">
<strong>
A React wrapper to use when you need a Child component to be aware of its own dimensions.
</strong>
<br><br>

<!-- downloads per week-->
<a href="https://npmjs.com/package/react-dims">
  <img src="https://img.shields.io/npm/dw/react-dims.svg"/>
</a>

<!-- npm version -->
<a href="https://npmjs.com/package/react-dims">
  <img src="https://img.shields.io/npm/v/react-dims.svg"/>
</a>

<!-- maintenance statuss-->
<a href="https://github.com/DavidODonovan/react-dims#maintenance-status">
  <img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg"/>
</a>

</p>

React-dims is a dimensions provider for React components, enabling you to make any React component self-aware of it's own width, height, x and y coordinates, by passing them down as props.

When the component is resized, props are updated, so the component is always aware of what it's own dimensions are.

Useful for things like getting the current dimensions of components that are housed within a CSS grid, or wrapping a responsive D3 chart so you can resize it dynamically using the new width and height.

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
