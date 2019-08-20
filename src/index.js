import React, { useRef, useState, useEffect } from 'react';

const ReactLand = React.createContext(null);

export const Provider = (props)=>{
  const domNode = useRef(null);
  const [dimensions, setDimensions] = useState({});
	const [invocationContext, setInvocationContext] = useState(0);

  useEffect(()=>{
    setDimensions(domNode.current.getBoundingClientRect());
  },[]);

  useEffect(()=>{
    window.addEventListener('resize', getNodeDimensions);
    return ()=>{ window.removeEventListener('resize', getNodeDimensions)};
  }, []);

  const getNodeDimensions = ()=>{
    clearTimeout(invocationContext);
    setInvocationContext(()=>setTimeout(()=>{
	      setDimensions(domNode.current.getBoundingClientRect());
	    }, 100)
		);
  };

  return (
      <div ref={domNode} style={{height: '100%'}}>
        <ReactLand.Provider value={dimensions}>
					{props.children}
        </ReactLand.Provider>
      </div>
  )
};

export const withContext=(ChildComponent)=>{
	return (props)=>(
			<ReactLand.Consumer>
				{(incomingDims)=>(<ChildComponent {...props} dims={incomingDims} />)}
			</ReactLand.Consumer>
		)
};
