//https://velog.io/@tlatjdgh3778/React%EC%97%90%EC%84%9C-Modal-%EA%B5%AC%ED%98%84

import React, { useState } from 'react'
import { StButton, StBtnRowCtn } from './Button'
import { styled } from 'styled-components'

const Modal = () => {
  const [modal1, setModal1] = useState(false)
  const modalOnOff1 = (event) => {
    console.log(event.target)
    setModal1(!modal1)
  }
  const [modal2, setModal2] = useState(false)
  const modalOnOff2 = (event) => {
    console.log(event.target)
    setModal2(!modal2)
  }
  return (
    <div>
      <h1>Modal</h1>
      <StBtnRowCtn>
        <StButton onClick={modalOnOff1} borderColor="rgb(85, 239, 196)" backgroundColor="rgb(85, 239, 196)" height="40px" width="100px">open modal</StButton>
        <StButton onClick={modalOnOff2} borderColor="pink" backgroundColor="white" color="red" height="50px" width="250px">open modal</StButton>
      </StBtnRowCtn>
      {/* modal &&에 대해서는 https://www.youtube.com/watch?v=9DwGahSqcEc 4분30초 참조. modal이 true: &&연산자는 오른쪽 피연산자 평가 / modal이 false: && 연산자는 평가 과정에서 바로 결과를 false로 판단하며, 뒤의 코드 평가X   */}
      {modal1 && (<div>
        <StOverlay/>
          <StModalBox>
            <div>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않음.</div>
            <StBtnCtn>
            <div>
              <StButton onClick={modalOnOff1} borderColor="pink" backgroundColor="pink" color="red" height="40px" width="100px">닫기</StButton>
            </div>
              <StButton onClick={modalOnOff1} borderColor="rgb(85, 239, 196)" backgroundColor="rgb(85, 239, 196)" height="40px" width="100px">확인</StButton>
              </StBtnCtn>
          </StModalBox>
      </div>)}
      {modal2 && (<div>
        <StOverlay onClick={modalOnOff2}/>
        <StModalBox>
          <div>닫기 버튼 1개가 있고, 
              <br/>
              외부 영역을 누르면 모달이 닫혀요.
          </div>
          
            <StModalCloseBtn onClick={modalOnOff2} >X</StModalCloseBtn>
          
        </StModalBox>
      </div>)}
    </div>
  )
}

export default Modal

const StOverlay = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: #999;
  z-index: 0;
`
const StModalBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  box-sizing: border-box;
  border-radius:20px;
  padding: 24px;
  background-color: white;
  z-index: 2;
  transform: translate(-50%, -50%); /*translate함수는 요소를 지정된 크기만큼 이동. -50%는 모달창의 너비만큼 X축으로 왼쪽, -50%는 너비만큼 Y축으로 위쪽 이동. */
  width: 500px;
  height: 300px;
`

const StBtnCtn = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
  gap: 10px;
`

const StModalCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: #ebebeb;
  height: 50px;
  width: 50px;
  border-radius:50%;
  cursor: pointer;
`