import React, {Component} from 'react';
import styled from 'styled-components';
import { capitalize } from '../utils/helpers';
import {Link} from 'react-router-dom';

const CategoriesContent = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  min-width: 200px;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`;

const CategoriesSelect = styled.select`
  outline: 0px;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
  margin-right: 8px;
  min-width: 100px;
  padding: 8px;  

  option:checked, option:hover {
    color: #f2af1e;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
`;

const CategoryLink = styled(Link)`
  text-decoration: none;

  a:hover,
  a:focus {
    border: 2px solid rgb(61, 146, 201);
  }

  a:active {
    text-decoration: underline;
  }
`;

class Categories extends Component {   
  render() {
    const {categories} = this.props;

    return (
      <CategoriesContent>
        <Ul>
        <Li key={'All'}> 
          <CategoryLink to={"/"}>{'All'}</CategoryLink>
        </Li>
        {
          categories.length && categories.map(category => (
            <Li key={category.name}> 
              <CategoryLink to={`${category.path}`}>{capitalize(category.name)}</CategoryLink>
            </Li>
          ))
        }
        </Ul>
      </CategoriesContent>  
    )
  }
}

export default Categories;