import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { FETCH_ADD_NEW_POST, WATCH_TOGGLE_ADD_POST_MODAL } from '../sagas/posts';

class NewPost extends Component {
  state = {
    post: {
      body: '',
      title: '',
      author: '',
      category: '',
    },
  };

  onSave = () => {
    const { post } = this.state;
    const { addPost } = this.props;

    addPost(post);
  };

  onTextChange = name => (event) => {
    const { post } = this.state;

    post[name] = event.target.value;

    this.setState({ post });
  };

  render() {
    const { post } = this.state;
    const { categories, onClose } = this.props;

    return (
      <div>
        <h2>New post</h2>
        <PostForm
          onClose={onClose}
          post={{ ...post }}
          onSave={this.onSave}
          categories={categories}
          onTextChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {  
    categories: [...categories]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: post => dispatch({ type: FETCH_ADD_NEW_POST, post }),
    onClose: () => dispatch({ type: WATCH_TOGGLE_ADD_POST_MODAL }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPost);
