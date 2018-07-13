import React, {Component} from 'react';
import styled from 'styled-components';
import thumbUp from '../icons/thumb-up-button.svg';
import thumbDown from '../icons/thumb-down-button.svg';
import { printDate } from '../utils/helpers';

const PostContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Title = styled.h1``;

const DivActions = styled.div`
  display: flex;
  height: 40px;
`;

const DivImg = styled.div`
  display: flex;
`;

const SpanImg = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  cursor: pointer;
`;

const Author = styled.p`
  color: #a1a1a1;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 110%;
  font-style: italic;
`;


class Post extends Component {  
  render() {
    const {post} = this.props;

    return (
      <PostContent>
        <Title>{post.title}</Title>
        <Author>By {post.author} under {post.category} on {printDate(post.timestamp)}</Author>
        <DivActions>
          <DivImg><SpanImg img={thumbUp}/></DivImg>
          <DivImg><SpanImg img={thumbDown}/></DivImg>
        </DivActions>  
      </PostContent>
    )
  }
}

export default Post;