import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const Input = styled.input`
  padding: 3px;

  font-size: 16px;
  margin-top: 3px;
  border-radius: 3px;
  border: 1px solid grey;

  &:focus {
    border-color: black;
  }
`;

const TextInput = ({
  value = '', label, name, onChange,
}) => (
  <div>
    <Label for={name}>{label}</Label>
    <Input autocomplete="off" name={name} value={value} onChange={onChange} />
  </div>
);

export default TextInput;
