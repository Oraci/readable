import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MainHeader = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  padding: 10px 0;
  background: #f2af1e;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 400;
  margin: 16px;
  color: white;
  font-size: 50px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const SubTitle = styled.h2`
  font-weight: 300;
  color: #940101;
  margin: 0;
`;

class Header extends Component {
  render() {
    return(
      <MainHeader>
        <HeaderTitle>
          <Title><Link to={"/"}>READABLE</Link></Title>
          <SubTitle>Add your posts and make your comments! Feel free!</SubTitle>
        </HeaderTitle>
      </MainHeader>
    )
  }
}

export default Header;