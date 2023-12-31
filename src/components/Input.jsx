import React, { useState } from 'react'
import { styled } from 'styled-components'
import { StButton } from './Button'

const Input = () => {

  const [inputName, setInputName] = useState("")
  const [inputPrice, setInputPrice] = useState("")

  //toLocaleString()이 콤마를 표현하는 메인 메서드.
  const nameInputHandler = (event) => {
    const newInputName = event.target.value
    setInputName(newInputName)
  }

  const priceInputHandler = (event) => {
    const newInputPrice = event.target.value
    const removedCommaNewInputPrice = Number(newInputPrice.replaceAll(",",""))
    setInputPrice(removedCommaNewInputPrice.toLocaleString())
  }

  const alertInput = (event) => {
    event.preventDefault();
    console.log("inputName, inputPrice => ", inputName, inputPrice)
    alert(`이름: ${inputName}  가격: ${inputPrice}`)
  }
  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={alertInput}>
        <StInputCtn>
          <div>이름<StNameInput value={inputName} onChange={nameInputHandler}/></div>
          {/* 가격의 input에 type이 꼭 text여야 한다. 왜냐하면 ,는 type이 number일 때 표현이 안 되어 에러가 뜨기 때문이다. */}
          <div>가격<StNameInput type="text" value={inputPrice} onChange={priceInputHandler}/></div>
          <StButton borderColor="rgb(85, 239, 196)" backgroundColor="rgb(85, 239, 196)" height="40px" width="100px">저장</StButton>
        </StInputCtn>

      </form>
    </div>
  )
}

export default Input

const StInputCtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`

const StNameInput = styled.input`
  height: 50px;
  width: 250px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0 10px;
`