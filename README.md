<p align="center"><img src="https://user-images.githubusercontent.com/16183533/64230129-459f6f80-cf2f-11e9-8cda-fe1569227458.png" width=250></p>
<h2 align="center">React Dims</h2>
<p align="center">
<strong>
A simple to use React hook that makes any element in your layout aware of its own dimensions.
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

<p>
<strong>NOTE: 14 Apr 2021 ~ react-dims now exports the useDims() hook! 👍</strong>
</p>

<p>
Invoking useDims() inside any React JSX element will give you it's width, height, x and y coordinates.
</p>
<p>
Very useful for making responsive graphs and charts that live inside grid & flex layouts.  
</p>

<p>
For example fully responsive d3.js charts, responsive dashboards, or responsive canvas animations.
</p>

<p>
When the element/browser window is resized, the hook fires again, making your element continuously aware of what it's own dimensions are.
</p>

<p>
Requires React version 16.8.0 or greater.
</p>

### Installation

```code
npm i react-dims
```
### Usage
See example code [here on github ](https://github.com/DavidODonovan/react-dims/tree/master/examples)

The useDims() hook returns a useRef hook and a dimensions object:
```

App.js

```code
import { useDims } from 'react-dims';

const App=()=>{
  return (
    <div className='myLayout'>
        <ChildNode className='coolThing'/>
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
