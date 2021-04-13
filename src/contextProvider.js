import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ReactDims = React.createContext(null);

export const Provider = (props)=>{
  const domNode = useRef(null);
  const [dimensions, setDimensions] = useState({});
  const [timeoutID, newTimeoutID] = useState(null);

  useEffect(()=>{
    setDimensions(domNode.current.getBoundingClientRect());
  },[]);

  useEffect(()=>{
    window.addEventListener('resize', getNodeDimensions);
    return ()=>{ window.removeEventListener('resize', getNodeDimensions)};
  }, []);

  const getNodeDimensions = ()=>{
    clearTimeout(timeoutID);
    newTimeoutID(setTimeout(()=>{
        setDimensions(domNode.current.getBoundingClientRect());
      }, props.debounce)
    );
  };

  return (
    <div ref={domNode} style={{height: '100%'}}>
      <ReactDims.Provider value={dimensions}>
        {props.children}
      </ReactDims.Provider>
    </div>
  )
};

Provider.propTypes = {
  debounce: PropTypes.number
}

Provider.defaultProps = {
  debounce: 100
}

export const withContext=(ChildComponent)=>{
  return (props)=>(
        <ReactDims.Consumer>
          {(incomingDims)=>(<ChildComponent {...props} dims={incomingDims} />)}
        </ReactDims.Consumer>
  )
};

export const useReactDims=(props)=>{
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
