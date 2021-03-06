import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { 
  FETCH_EDIT_POST, 
  WATCH_TOGGLE_EDIT_POST_MODAL
} from '../sagas/posts';

class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post,
    };
  }

  onSave = () => {
    const { post, savePost } = this.props;
    const details = { ...post };

    savePost(post.id, details);
  };

  onClose = () => {
    const {onClose, post} = this.props;

    onClose(post);
  }

  onTextChange = name => (event) => {
    const { post } = this.state;

    post[name] = event.target.value;

    this.setState(prevState => ({ ...prevState, post }));
  };

  render() {
    const {post, categories} = this.props;

    return (
      <div>
        <h2>Edit post</h2>
        <PostForm
          onClose={this.onClose}
          post={{ ...post }}
          onSave={this.onSave}
          categories={categories}
          onTextChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {  
    post: { ...posts.post },
    categories: [...categories]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (post) => dispatch({ type: WATCH_TOGGLE_EDIT_POST_MODAL, post}),
    savePost: (postId, details) => dispatch({ type: FETCH_EDIT_POST, postId, details })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);
