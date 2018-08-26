import React, {Component} from 'react';
import styled from 'styled-components';
import { printDate } from '../utils/helpers';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Actions from './Actions';

import { 
  REQUEST_COMMENT_SCORE,
  FETCH_DELETE_COMMENT,
  WATCH_TOGGLE_EDIT_COMMENT_MODAL
} from '../sagas/comments';

const CommentContent = styled.div`
  border: 1px solid #a1a1a1;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px 10px 10px 0;
  padding: 10px;
  border-radius: 10px;
`;

const Author = styled.p`
  color: #a1a1a1;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 110%;
  font-style: italic;
  margin: 0 5px 5px 0;
`;

const Body = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: #a1a1a1;
`;

class Comment extends Component {
  onUpvote = () => {
    const { comment, commentScore } = this.props;
    
    commentScore(comment.id, 'upVote');
  };

  onDownvote = () => {
    const { comment, commentScore } = this.props;
    
    commentScore(comment.id, 'downVote');
  };

  onDelete = () => {
    const { comment, deleteComment } = this.props;

    deleteComment(comment.id);
  }

  onEdit = () => {
    const { comment, toggleEditCommentModal} = this.props;

    toggleEditCommentModal(comment);
  };

  onClick = () => {
    const { comment, history } = this.props;
    const { id, category } = comment;

    history.push(`/${category}/${id}`);
  };

  render() {
    const {comment} = this.props;
    const {body, author, timestamp, voteScore} = comment;

    return (
      <CommentContent>
        <Author>By {author} on {printDate(timestamp)}</Author>
        <Body>{body}</Body>

        <Actions
          voteScore={voteScore}
          onUpvote={this.onUpvote} 
          onDownvote={this.onDownvote}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
      </CommentContent>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    commentScore: (commentId, option) => dispatch({type: REQUEST_COMMENT_SCORE, commentId, option}),
    deleteComment: comment => dispatch({ type: FETCH_DELETE_COMMENT, comment }),
    toggleEditCommentModal: comment => dispatch({ type: WATCH_TOGGLE_EDIT_COMMENT_MODAL, comment }),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment));