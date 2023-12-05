import React from 'react'
import styled from 'styled-components';

// 버튼 스타일
const buttonStyles = `
  font-weight: bold;
  outline: none;
  border: none;
  margin: 0 2px;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
`;

// 일반 버튼 스타일
const standard = `
  background-color: royalblue;
  color: white;
`;

// ID가 "btn"인 버튼 스타일
const unique = `
  background-color: red;
  color: white;
`;

// 스타일드 컴포넌트 생성
const StyledButton = styled.button`
  ${buttonStyles}
  ${props => props.id === 'btn' ? unique : standard}
`;

// Button 컴포넌트
const Button = ({ id }) => {
  return <StyledButton id={id}>Button</StyledButton>;
}

export default Button;
