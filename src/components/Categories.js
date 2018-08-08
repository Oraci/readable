import React, {Component} from 'react';
import styled from 'styled-components';
import {capitalize} from '../utils/helpers';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const CategoriesContent = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  min-width: 200px;
  flex-direction: column;
  margin: 0;
  height: 100%;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  padding: 5px;  
`;

const LinkCategory = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  width: 100px;
`;

class Categories extends Component {
  render() {
    const {categories} = this.props;

    return (
      <CategoriesContent>
        <Ul>
        <Li key={'All'}> 
          <LinkCategory to={"/"}>{'All'}</LinkCategory>
        </Li>
        {
          categories.length && categories.map(category => (
            <Li key={category.name}> 
              <LinkCategory 
                to={`${category.path}`}
              >{capitalize(category.name)}</LinkCategory>
            </Li>
          ))
        }
        </Ul>
      </CategoriesContent>  
    )
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

export default connect(
  mapStateToProps
)(Categories);