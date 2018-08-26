import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';
import { FETCH_ADD_NEW_COMMENT, WATCH_TOGGLE_ADD_COMMENT_MODAL } from '../sagas/comments';

class NewComment extends Component {
  state = {
    comment: {
      body: '',
      author: '',
    },
  };

  onSave = () => {
    const { comment } = this.state;
    const { post, addComment } = this.props;

    addComment(post.id, comment);
  };

  onTextChange = name => (event) => {
    const { comment } = this.state;

    comment[name] = event.target.value;

    this.setState({ comment });
  };

  render() {
    const { comment } = this.state;
    const { onClose } = this.props;

    return (
      <div>
        <h2>New comment</h2>
        <CommentForm
          onClose={onClose}
          comment={{ ...comment }}
          onSave={this.onSave}
          onTextChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {  
    post: {...posts.post}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (postId, comment) => dispatch({ type: FETCH_ADD_NEW_COMMENT, comment, postId }),
    onClose: () => dispatch({ type: WATCH_TOGGLE_ADD_COMMENT_MODAL }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComment);
