import React from 'react';
import styled from 'styled-components';
import thumbUp from '../icons/thumb-up-button.svg';
import thumbDown from '../icons/thumb-down-button.svg';
import thumbEdit from '../icons/edit.svg';
import thumbDelete from '../icons/delete.svg';

const DivActions = styled.div`
  display: flex;
`;

const ActionDiv = styled.div`
  display: flex;
  padding-right: 10px;
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

const Actions = ({voteScore, onUpvote, onDownvote, onEdit, onDelete}) => (
  <DivActions>
    <ActionDiv><SpanImg img={thumbUp} onClick={onUpvote} /></ActionDiv>
    <ActionDiv><SpanImg img={thumbDown} onClick={onDownvote} /></ActionDiv>
    <ActionDiv><span>{voteScore}</span></ActionDiv>
    <ActionDiv><SpanImg img={thumbEdit} onClick={onEdit} />Editar</ActionDiv>
    <ActionDiv><SpanImg img={thumbDelete} onClick={onDelete} />Deletar</ActionDiv>
  </DivActions>
)

export default Actions;