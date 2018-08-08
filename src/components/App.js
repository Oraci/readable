import React, {Component} from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import Header from './Header';
import Categories from './Categories';
import ListPosts from './ListPosts';
import styled from 'styled-components';
import img from '../icons/message-bubble.svg';
import {connect} from 'react-redux';

import {
  requestCategories
} from '../actions';

const Main = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
`;

const OpenPostContent = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

const OpenPostLink = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 100% / 50%;
  background: #f2af1e;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  font-size: 0;
`;

class App extends Component {
  componentDidMount() {
    const {getCategories} = this.props;

    getCategories();
  }
  
  render() {
    const {categories} = this.props;

    return (
      <Main>
        <Header>
        </Header>
        <Body>
          <Categories categories={categories} />

          <div>
            <Route exact path="/" component={ListPosts} />
            <Route exact path="/:category" component={ListPosts} />
          </div>

          <OpenPostContent>
            <OpenPostLink to="/post" />
          </OpenPostContent>
        </Body>
      </Main>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: [...categories],
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(requestCategories()),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
