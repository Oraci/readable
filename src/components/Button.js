import React from 'react';
import styled from 'styled-components';

const DivButton = styled.button`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 10px;
  background-color: #f2af1e;
  color: white;
`;

const Button = ({ label, onClick }) => (
  <DivButton onClick={onClick} type="button">
    {label}
  </DivButton>
);

export default Button;
