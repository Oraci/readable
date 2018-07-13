import React, {Component} from 'react';
import styled from 'styled-components';
import Post from './Post';

const ListPostsContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

class ListPosts extends Component {
  render() {
    const {posts, filter} = this.props;

    let filteredPosts = [];
    if (!filter) {
      filteredPosts = posts;
    }

    return (
      <ListPostsContent>
      {
        filteredPosts && filteredPosts.map((post) =>
          <Post key={post.id} post={post}/>
        )
      }
      </ListPostsContent>
    )
  }
}

export default ListPosts;