import React, {Component} from 'react';
import styled from 'styled-components';
import CalendarIcon from 'react-icons/lib/fa/search';
import { capitalize } from '../utils/helpers';

const CategoriesContent = styled.div`
  justify-content: center;
  display: flex;
  padding: 16px;
  align-items: center;
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

class Categories extends Component {   
  render() {
    const {categories} = this.props;

    return (
      <CategoriesContent>
        <CategoriesSelect onChange={(e) => this.handleChange(e)} value={"All"}>
          <option value="All">All</option>
          {
            categories && categories.map(v => (
              <option key={v.name} value={v.name}>{capitalize(v.name)}</option>
            ))
          }
        </CategoriesSelect>
        <CalendarIcon size={16}/>
      </CategoriesContent>
    )
  }
}

export default Categories;