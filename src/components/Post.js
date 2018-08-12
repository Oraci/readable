import React, {Component} from 'react';
import styled from 'styled-components';
import thumbUp from '../icons/thumb-up-button.svg';
import thumbDown from '../icons/thumb-down-button.svg';
import { printDate } from '../utils/helpers';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { REQUEST_POST_SCORE } from '../sagas/posts';

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

const CategoryLink = styled(Link)`
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  user-select: none;
  white-space: nowrap;
`;

class Post extends Component {
  onUpvote = () => {
    const { post, postScore } = this.props;
  
    postScore(post.id, 'upVote');
  };

  onDownvote = () => {
    const { post, postScore } = this.props;
    
    postScore(post.id, 'downVote');
  };

  render() {
    const {post} = this.props;
    const {title, category, author, timestamp, voteScore} = post;

    return (
      <PostContent>
        <Title>{title}</Title>
        <CategoryLink to={`/${category}`}>{category}</CategoryLink>
        <Author>By {author} under {category} on {printDate(timestamp)}</Author>
        <DivActions>
          <DivImg><SpanImg img={thumbUp} onClick={this.onUpvote} /></DivImg>
          <DivImg><SpanImg img={thumbDown} onClick={this.onDownvote} /></DivImg>
          <div><span>{voteScore}</span></div>
        </DivActions>  
      </PostContent>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postScore: (postId, option) => dispatch({type: REQUEST_POST_SCORE, postId, option})
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post));