import React from 'react'
import './App.css'
import Calculator from '../src/components/Calculator'
import styled from 'styled-components'

const Container = styled.div`
  background-color: navy;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App () {
  return (
    <Container>
      <link href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' rel='stylesheet' />
      <Calculator />
    </Container>
  )
}
export default App
