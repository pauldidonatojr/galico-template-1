import React from 'react';
import GridContainer from './GridContainer';
import Header from './Header';
import Article from './Article';
import Nav from './Nav';
import Ads from './Ads';
import Footer from './Footer';

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
