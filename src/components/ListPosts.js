import React, {Component} from 'react';
import styled from 'styled-components';

const ListPostsContent = styled.div`
  display: flex;
  flex: 1;
`;

class ListPosts extends Component {
  render() {
    return (
      <ListPostsContent>List Posts</ListPostsContent>
    )
  }
}

export default ListPosts;