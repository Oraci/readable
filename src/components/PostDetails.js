import React, {Component} from 'react';
import Modal from 'react-modal';
import Post from './Post';
import Button from './Button';
import Comment from './Comment';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {NewComment, EditComment, EditPost} from '../modals';

import {
  FETCH_POST, 
  WATCH_TOGGLE_ADD_POST_MODAL
} from '../sagas/posts';

import {
  REQUEST_COMMENTS, 
  WATCH_TOGGLE_ADD_COMMENT_MODAL,
  WATCH_TOGGLE_EDIT_COMMENT_MODAL
} from '../sagas/comments';

class PostDetails extends Component {
  componentDidMount() {
    const { getPost, getComments } = this.props;
    const { post: postId } = this.props.match.params;

    getPost(postId);
    getComments(postId);
  }

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

  renderNewCommentModal = () => {
    const { showAddNewCommentModal, toggleAddNewCommentModal } = this.props;

    return (
      <Modal
        ariaHideApp={false}
        shouldCloseOnOverlayClick
        isOpen={showAddNewCommentModal}
        onRequestClose={toggleAddNewCommentModal}
      >
        <NewComment />
      </Modal>
    );
  };

  renderEditCommentModal = () => {
    const { showEditCommentModal, toggleEditCommentModal } = this.props;

    return (
      <Modal
        ariaHideApp={false}
        shouldCloseOnOverlayClick
        isOpen={showEditCommentModal}
        onRequestClose={toggleEditCommentModal}
      >
        <EditComment />
      </Modal>
    );
  };

  render() {
    const {post, comments, toggleAddNewCommentModal} = this.props;

    return (
      <div>
        <Post showBody={true} post={post}/>

        <div>
          <Button label="Add new comment" onClick={toggleAddNewCommentModal}/>
        </div>

        {
          comments.length === 0 ? <div>No comments</div> : <div>Comments: {comments.length}</div>
        }

        {
          comments.length > 0 && comments.map((comment) =>
            <Comment key={comment.id} comment={comment} />
          )
        }  
        
        {this.renderEditPostModal()}
        {this.renderNewCommentModal()}
        {this.renderEditCommentModal()}        
      </div>
    )
  }
}

const mapStateToProps = ({posts = {}, comments = []}) => {
  return {
    post: {...posts.post},
    posts: [...posts.posts],
    comments: [...comments.comments],
    showEditPostModal: posts.showEditPostModal,
    showEditCommentModal: comments.showEditCommentModal,
    showAddNewCommentModal: comments.showAddNewCommentModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: postId => dispatch({ type: FETCH_POST, postId }),
    getComments: postId => dispatch({ type: REQUEST_COMMENTS, postId }),
    toggleAddPostModal: () => dispatch({ type: WATCH_TOGGLE_ADD_POST_MODAL }),
    toggleAddNewCommentModal: () => dispatch({ type: WATCH_TOGGLE_ADD_COMMENT_MODAL }),
    toggleEditCommentModal: comment => dispatch({ type: WATCH_TOGGLE_EDIT_COMMENT_MODAL, comment }),  
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails));