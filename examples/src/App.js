import { useReactDims } from 'react-dims';
const App=()=>{
  const [domNode, dims] = useReactDims();
  return (
    <div ref={domNode}>lakjsd</div>
  );
}

export default App;
