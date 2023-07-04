import React from 'react';
import GridContainer from '../styled-components/GridContainer';
import Header from '../styled-components/Header';
import Article from '../styled-components/Article';
import Nav from '../styled-components/Nav';
import Ads from '../styled-components/Ads';
import Footer from '../styled-components/Footer';

function HomePage() {
  return (
    <GridContainer>
      <Header>Header</Header>
      <Article>Article</Article>
      <Nav>Nav</Nav>
      <Ads>Ads</Ads>
      <Footer>Footer</Footer>
    </GridContainer>
  );
}

export default HomePage;
