import { useRef, useState, useEffect } from 'react';

const useReactDims=(props)=>{
  const domNode = useRef(null);
  const [dimensions, setDimensions] = useState({});
  const [timeoutID, newTimeoutID] = useState(null);

  useEffect(()=>{
    setDimensions(domNode.current.getBoundingClientRect());
  },[]);

  useEffect(()=>{
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
