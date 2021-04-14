<p align="center"><img src="https://raw.githubusercontent.com/DavidODonovan/react-dims/master/darkLogo.jpg" width=250></p>


<h2 align="center">React Dims</h2>
<p align="center">
<strong>
A React hook that gives you the dimensions of any element in your layout. Tooooo easy!
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
<strong>NOTE: 14 Apr 2021 ~ react-dims now exports the useDims() hook ~  <em>much</em> nicer to 'use'...  👍</strong>
</p>

#### Installation

```code
npm i react-dims
```
#### Simple Use Case

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
See example [here on github ](https://github.com/DavidODonovan/react-dims/tree/master/examples).

<p>
Invoke <strong>useDims( )</strong>  inside any React JSX element and it will give you it's width, height, plus x and y coordinates.
</p>
<p>
Very useful for making responsive d3.js charts that live inside responsive grid containers. Use multiple times for all components inside responsive dashboards.
When the element is resized, the hook fires again, making your element immediately aware of what it's new dimensions are.
</p>

<p>
Requires React version 16.8.0 or greater.
</p>


This hook leverages the native [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) method, so dims will be an object that looks something like this;

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
### A Guide for Responsive d3.js Charts
If you are interested in learning how to create responsive d3.js charts,  [see this medium article](https://medium.com/nightingale/d3-and-react-a-design-pattern-for-responsive-charts-f77337d37ab9),  which will walk you through your first responsive d3 chart inside of React! 👍
