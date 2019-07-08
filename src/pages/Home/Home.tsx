import * as React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import LinkButton from '../../components/LinkButton';
import logoImg from '../../img/logo-white.png';

const GridContainer = styled(Grid).attrs({
  container: true,
  justify: 'center',
  alignContent: 'center',
  direction: 'column'
})`
  height: 100vh;
`;

const Logo = styled.img`
  max-width: 250px;
  height: auto;
`;

interface HomeProps {}

const Home: React.SFC<HomeProps> = () => (
  <GridContainer>
    <Logo src={logoImg} alt="Rockmass" className="mb-5" />
    <LinkButton to="/data-collection/form-1">Collect Data</LinkButton>
  </GridContainer>
);

export { Home };
