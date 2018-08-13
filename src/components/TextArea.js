import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const Area = styled.textarea`
  padding: 3px;
  height: 150px;
  font-size: 16px;
  margin-top: 3px;
  resize: vertical;
  border-radius: 3px;
  border: 1px solid grey;

  &:focus {
    border-color: black;
  }
`;

const TextArea = ({
  value = '', label, name, onChange,
}) => (
  <div>
    <Label for={name}>{label}</Label>
    <Area name={name} value={value} onChange={onChange} />
  </div>
);

export default TextArea;
