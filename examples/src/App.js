import { useRef, useEffect } from 'react';
import { useReactDims } from 'react-dims';
const App=()=>{
  // const [domNode, dims] = useReactDims();
  const domNode = useRef(null);
  useEffect(()=>{
    if(!domNode.current){
      console.log("no dom node current")
    }
  },[])
  return (
    <div>lkajsd</div>
  );
}

export default App;
