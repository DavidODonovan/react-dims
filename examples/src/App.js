import { Grid, CoolThing, AnotherCoolThing } from './style';
import { useReactDims, withContext } from 'react-dims'

const Dashboard=()=>{
  const [domNode, dims] = useReactDims();
  const [anotherDomNode, anotherDims] = useReactDims();

  return (
      <Grid>
        <CoolThing ref={domNode}>
          my height: {dims.height}
          <br/>
          <br/>
          my width: {dims.width}
        </CoolThing>

        <AnotherCoolThing ref={anotherDomNode}>
          {anotherDims.height}
          <br/>
          {anotherDims.width}
        </AnotherCoolThing>

      </Grid>
  );
};

export default Dashboard;
