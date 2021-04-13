import { Grid, CoolThing, AnotherCoolThing } from './style';
import { useDims } from 'react-dims'

const Dashboard=()=>{
  const [domNode, dims] = useDims();
  const [anotherDomNode, anotherDims] = useDims();

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
