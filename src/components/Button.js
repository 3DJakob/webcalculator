import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color: white;
    width: ${props => props.size * 25 + '%'};
    height: 100px;
    display: flex;
    align-items: stretch;
    font-size: 32px;
    font-weight: bold;
    user-select: none;

    >div {
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 10px;
      flex: 1;
      transition: 150ms;
      transform: scale(1);
      cursor: pointer;
    }

    >div:hover {
      background-color: rgba(255, 255, 255, 0.4);
      transform: scale(1.05);
    }
`

function Button ({ size, text, onClick }) {
  return (
    <Container size={size}>
      <div onClick={onClick}>
        {text}
      </div>
    </Container>
  )
}
export default Button
