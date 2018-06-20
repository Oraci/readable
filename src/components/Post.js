import React, {Component} from 'react';
import styled from 'styled-components';

const PostContent = styled.div`
  display: flex;
  flex: 1;
`;

class Post extends Component {
  render() {
    return (
      <PostContent>Post</PostContent>
    )
  }
}

export default Post;