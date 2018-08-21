import React, {Component} from 'react';
import styled from 'styled-components';
import Post from './Post';
import Button from './Button';
import Comment from './Comment';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {REQUEST_COMMENTS} from '../sagas/comments';
import {FETCH_POST} from '../sagas/posts';

class PostDetails extends Component {
  componentDidMount() {
    const { getPost, getComments } = this.props;
    const { post: postId } = this.props.match.params;

    getPost(postId);
    getComments(postId);
  }

  render() {
    const {post, comments} = this.props;

    return (
      <div>
        <Post showBody={true} post={post}/>

        <div>
          <Button label="Add new comment" />
        </div>

        {
          comments.length === 0 && <div>No comments</div>
        }

        {
          comments.length && comments.map((comment) =>
            <Comment key={comment.id} comment={comment} />
          )
        }        
      </div>
    )
  }
}

const mapStateToProps = ({posts = {}, comments = []}) => {
  return {
    post: {...posts.post},
    comments: [...comments.comments]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: postId => dispatch({ type: FETCH_POST, postId }),
    getComments: postId => dispatch({ type: REQUEST_COMMENTS, postId }),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails));