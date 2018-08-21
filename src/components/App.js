import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Header from './Header';
import Categories from './Categories';
import ListPosts from './ListPosts';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {REQUEST_CATEGORIES} from '../sagas/categories';
import PostDetails from './PostDetails';

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

const ContentPost = styled.div`
  width: 100%;
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

          <ContentPost>
            <Route exact path="/" component={ListPosts} />
            <Route exact path="/:category" component={ListPosts} />
            <Route path="/:category/:post" component={PostDetails} />
          </ContentPost>
        </Body>
      </Main>
    );
  }
}

const mapStateToProps = ({categories}) => {
  return {
    categories: [...categories]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch({type: REQUEST_CATEGORIES})
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
