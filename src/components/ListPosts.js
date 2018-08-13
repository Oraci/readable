import React, {Component} from 'react';
import styled from 'styled-components';
import Post from './Post';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { REQUEST_POSTS } from '../sagas/posts';

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
    const {match, getPosts} = this.props;
    const {match: previousMatch} = prevProps;

    if (match.params.category !== previousMatch.params.category) {
      getPosts(this.getCategory());
    }
  }

  getCategory = () => {
    const {match} = this.props;
    return match.params.category;
  };

  render() {
    const {posts} = this.props;
    const category = this.getCategory();
    const filteredPosts = category ? posts.filter((p) => p.category === category) : posts;
    const title = `Showing ${category ? `posts for ${category}` : 'all posts'}`;

    return (
      <ListPostsContent>
        <h2>{title}</h2>
      
        {
          filteredPosts.length === 0 && <div>No posts</div>
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

const mapStateToProps = ({posts = {}, categories= []}) => {
  return {
    posts: [...posts.posts],
    categories: [...categories],
    showNewPostModal: posts.showNewPostModal,
    showEditPostModal: posts.showEditPostModal,      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch({type: REQUEST_POSTS, category}),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts));