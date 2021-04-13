import { useRef, useState, useEffect } from 'react';

const useReactDims = (props)=>{
  const domNode = useRef(null);
  const [dimensions, setDimensions] = useState({});
  const [timeoutID, newTimeoutID] = useState(null);

  const warning=()=>{
    console.warn("useReactDims hook needs to be attached to a dom element before it can return a value: eg: <div ref={domNode}/>")
  };

  useEffect(()=>{
    if(!domNode.current){
      warning();
      return;
    };
    setDimensions(domNode.current.getBoundingClientRect());
  },[]);

  useEffect(()=>{
    if(!domNode.current){
      return;
    };
    const getNodeDimensions=()=>{
      clearTimeout(timeoutID);
      newTimeoutID(setTimeout(()=>{
          setDimensions(domNode.current.getBoundingClientRect());
        }, 100)
      );
    };
    window.addEventListener('resize', getNodeDimensions);
    return ()=>{ window.removeEventListener('resize', getNodeDimensions)};
  }, [timeoutID]);

  return (
    [domNode, dimensions]
  );
};

export default useReactDims;
