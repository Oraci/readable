import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const Select = styled.select`
  padding: 3px;

  font-size: 16px;
  margin-top: 3px;
  border-radius: 3px;
  border: 1px solid grey;

  &:focus {
    border-color: black;
  }
`;

const Listbox = ({
  options = [], value = '', label, name, onChange,
}) => (
  <div>
    <Label for={name}>{label}</Label>
    <Select autocomplete="off" value={value} name={name} onChange={onChange}>
      <option value="" />
      {
        options.length && options.map(option => (
          <option key={option.name} value={option.path}>
            {option.name}
          </option>
        ))
      }
    </Select>
  </div>
);

export default Listbox;
