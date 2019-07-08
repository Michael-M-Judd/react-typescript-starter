import * as React from 'react';
import { Grid, Button } from '@material-ui/core';
import styled from 'styled-components';

const GridContainer = styled(Grid).attrs({
  container: true,
  justify: 'center',
  alignContent: 'center'
})`
  height: 100vh;
`;

interface HomeProps {}

const Home: React.SFC<HomeProps> = () => (
  <GridContainer>
    <Button size="large" variant="contained" color="primary">
      Collect Data
    </Button>
  </GridContainer>
);

Home.defaultProps = {};

export { Home };
