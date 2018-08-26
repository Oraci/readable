import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

import { 
  FETCH_EDIT_COMMENT, 
  WATCH_TOGGLE_EDIT_COMMENT_MODAL
} from '../sagas/comments';

class EditComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
    };
  }

  onSave = () => {
    const { comment, saveComment } = this.props;
    const details = { ...comment };

    saveComment(comment.id, details);
  };

  onClose = () => {
    const {onClose, comment} = this.props;

    onClose(comment);
  }

  onTextChange = name => (event) => {
    const { comment } = this.state;

    comment[name] = event.target.value;

    this.setState(prevState => ({ ...prevState, comment }));
  };

  render() {
    const { comment, onClose } = this.props;

    return (
      <div>
        <h2>Edit comment</h2>
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

const mapStateToProps = ({ comments }) => {
  return {  
    comment: { ...comments.comment }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (comment) => dispatch({ type: WATCH_TOGGLE_EDIT_COMMENT_MODAL, comment}),
    saveComment: (commentId, details) => dispatch({ type: FETCH_EDIT_COMMENT, commentId, details })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditComment);
