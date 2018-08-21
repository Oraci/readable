import React, {Component} from 'react';
import styled from 'styled-components';
import Post from './Post';
import Button from './Button';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Filter from './Filter';
import Modal from 'react-modal';
import {NewPost, EditPost} from '../modals';

import {
  REQUEST_POSTS, 
  WATCH_FILTER_POSTS, 
  WATCH_TOGGLE_ADD_POST_MODAL
} from '../sagas/posts';

const ListPostsContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FilterContent = styled.div`
  width: 100%;
`

const Title = styled.h2`
  margin: 10px 0 0;
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

  onFilter = (filters) => {
    const { filterPosts } = this.props;

    filterPosts(filters);
  };

  renderNewPostModal = () => {
    const { showNewPostModal, toggleAddPostModal } = this.props;
  
    return (
      <Modal
        ariaHideApp={false}
        isOpen={showNewPostModal}
        shouldCloseOnOverlayClick
        onRequestClose={toggleAddPostModal}
      >
        <NewPost />
      </Modal>
    );
  };
  
  renderEditPostModal = () => {
    const { showEditPostModal, toggleEditPostModal } = this.props;
  
    return (
      <Modal
        ariaHideApp={false}
        isOpen={showEditPostModal}
        shouldCloseOnOverlayClick
        onRequestClose={toggleEditPostModal}
      >
        <EditPost />
      </Modal>
    );
  };  

  render() {
    const {posts, toggleAddPostModal} = this.props;
    const category = this.getCategory();
    const filteredPosts = category ? posts.filter((p) => p.category === category) : posts;
    const title = `Showing ${category ? `posts for ${category}` : 'all posts'}`;

    return (
      <ListPostsContent>
        <FilterContent>
          <Filter
            onFilter={this.onFilter}
          />
        </FilterContent>

        <div>
          <Button label="Add new post" onClick={toggleAddPostModal} />
        </div>

        <Title>{title}</Title>
      
        {
          filteredPosts.length === 0 && <div>No posts</div>
        }

        {
          filteredPosts.length && filteredPosts.map((post) =>
            <Post key={post.id} post={post}/>
          )
        }

        {this.renderNewPostModal()}
        {this.renderEditPostModal()}        
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
    filterPosts: filter => dispatch({ type: WATCH_FILTER_POSTS, filter }),
    toggleAddPostModal: () => dispatch({ type: WATCH_TOGGLE_ADD_POST_MODAL }),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts));