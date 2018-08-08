import React, {Component} from 'react';
import styled from 'styled-components';
import Post from './Post';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  requestPosts
} from '../actions';


const ListPostsContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

class ListPosts extends Component {
  componentDidMount() {
    const {getPosts} = this.props;

    getPosts(this.getCategory());
  }

  componentDidUpdate(prevProps) {
    const { match, getPosts } = this.props;
    const { match: previousMatch } = prevProps;

    if (match.params.category !== previousMatch.params.category) {
      getPosts(this.getCategory());
      debugger;
    }
  }

  getCategory = () => {
    const { match } = this.props;

    return match.params.category;
  };  

  render() {
    const {posts} = this.props;
    const filter = this.getCategory();

    let filteredPosts = [];
    if (filter) {
      filteredPosts = posts.filter((p) => p.category === filter);
    } else {
      filteredPosts = posts;
    }

    debugger;

    return (
      <ListPostsContent>
        { filteredPosts.length === 0 &&
          <div>No posts</div> 
        }

        {
          filteredPosts && filteredPosts.map((post) =>
            <Post key={post.id} post={post}/>
          )
        }
      </ListPostsContent>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(requestPosts(category)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts));