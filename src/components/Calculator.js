import React, { useState, useRef, useMemo } from 'react'
import Button from './Button'
import styled from 'styled-components'
import stringMath from 'string-math'

const Container = styled.div`
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`
const ButtonContainer = styled.div`
border-radius: 10px;
  width: 100%;
  max-width: 600px;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: space-around;
`

const Display = styled.div`
  // flex-direction: column;
  align-items: flex-end;
  padding: 10px;
`

const Input = styled.h1`
  color: #fff;
  height: 42px;
`

const Result = styled.h1`
  color: #fff;
  height: 42px;
  text-align: right;
  flex: 1;
`

// const evaluate = (value) => {
//   setResult(stringMath(value)
// }

function Calculator () {
  const [mathString, setMathString] = useState('')
  // const [result, setResult] = useState('Banana')
  const upperElementRef = useRef()

  const callback = () => {
    console.log('error')
  }

  const result = useMemo(
    () => (stringMath(mathString, callback)),
    [mathString]
  )

  const addToMathString = (value) => {
    setMathString(mathString + value)
    // setResult(stringMath(mathString + value))
  }

  const clear = () => {
    setMathString('')
  }

  const animateUpper = () => {
    console.log(upperElementRef.current)
    upperElementRef.current.style.animationName = 'bounce'
    const resetAnimation = () => {
      upperElementRef.current.style.animationName = ''
    }
    setTimeout(resetAnimation, 400)
  }

  const removeLast = () => {
    setMathString(mathString.slice(0, mathString.length - 1))
  }

  return (
    <Container className='calculator'>
      <Display>
        <Input>{mathString}</Input>
        <Result>= {result}</Result>
      </Display>

      <ButtonContainer>
        <Button onClick={clear} size={2} text='AC' />
        <Button onClick={removeLast} size={1} text='DEL' />
        <Button onClick={() => addToMathString('/')} size={1} text='/' />
        {/* New Line */}
        <Button onClick={() => addToMathString('7')} size={1} text={7} />
        <Button onClick={() => addToMathString('8')} size={1} text={8} />
        <Button onClick={() => addToMathString('9')} size={1} text={9} />
        <Button onClick={() => addToMathString('*')} size={1} text='×' />
        {/* New Line */}
        <Button onClick={() => addToMathString('4')} size={1} text={4} />
        <Button onClick={() => addToMathString('5')} size={1} text={5} />
        <Button onClick={() => addToMathString('6')} size={1} text={6} />
        <Button onClick={() => addToMathString('+')} size={1} text='+' />
        {/* New Line */}
        <Button onClick={() => addToMathString('1')} size={1} text={1} />
        <Button onClick={() => addToMathString('2')} size={1} text={2} />
        <Button onClick={() => addToMathString('3')} size={1} text={3} />
        <Button onClick={() => addToMathString('-')} size={1} text='-' />
        {/* New Line */}
        <Button onClick={() => addToMathString('.')} size={1} text='.' />
        <Button onClick={() => addToMathString('0')} size={1} text={0} />
        <Button onClick={() => addToMathString('(')} size={1} text='(' />
        <Button onClick={() => addToMathString(')')} size={1} text=')' />

      </ButtonContainer>

    </Container>
  )
}
export default Calculator
