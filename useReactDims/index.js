import { Grid, CoolThing, AnotherCoolThing } from './style';
import useReactDims from './useReactDims';

const Dashboard=()=>{
  const [domNode, dims] = useReactDims();
  const [anotherDomNode, anotherDims] = useReactDims();

  return (
      <Grid>

        <CoolThing ref={domNode}>
          {dims.height}
          <br/>
          {dims.width}
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
