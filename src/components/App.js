import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Categories from './Categories';
import ListPosts from './ListPosts';
import styled from 'styled-components';
import img from '../icons/message-bubble.svg';
import {connect} from 'react-redux';

import {
  requestCategories,
  requestPosts
} from '../actions';

const Main = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  border: 2px solid blue;
  flex-direction: column;
`;

const Body = styled.div`
  flex: 1;
  border: 2px solid red;
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
  updateBookShelf(state) {
    console.log("teste");
  }

  componentDidMount() {
    const {getCategories, getPosts} = this.props;

    getCategories();
    getPosts();
  }
  
  render() {
    const {categories, posts} = this.props;

    return (
      <Main>
        <Header>
        </Header>
        <Body>
          <Categories
            categories={categories}
          />
          <ListPosts />
          <OpenPostContent>
            <OpenPostLink to="/search" />
          </OpenPostContent>
        </Body>
      </Main>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(requestCategories()),
    getPosts: () => dispatch(requestPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
