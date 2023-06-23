import React from "react";
import { FaAngleRight, FaRegBell } from "react-icons/fa";
import styled from "styled-components";
// 리액트 아이콘 쓰는 법 https://kimyang-sun.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%95%84%EC%9D%B4%EC%BD%98react-icons-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
const Button = () => {

  const primaryButtonClickHandler = () => {
    alert("버튼을 만들어보세요")
  }
  const negativeButtonClickHandler = () => {
    prompt("어렵나요?")
  }
  return (
    <div>
      <h1>Button</h1>
      <StBtnRowCtn>
      <StButton onClick={primaryButtonClickHandler} borderColor="rgb(85, 239, 196)" backgroundColor="white" height="50px" width="250px">
        <div style={{
          display: "flex",
          justifyContent:"center",
          alignItem: "center",
        }}>
          Large Primary Button&nbsp;
          <div>
          <FaAngleRight/>
          </div>
        </div>
      </StButton>
      <StButton borderColor="rgb(85, 239, 196)" backgroundColor="rgb(85, 239, 196)" height="45px" width="130px">Medium</StButton>
      <StButton borderColor="rgb(85, 239, 196)" backgroundColor="rgb(85, 239, 196)" height="40px" width="100px">Small</StButton>
      </StBtnRowCtn>

      <StBtnRowCtn>
      <StButton onClick={negativeButtonClickHandler}borderColor="pink" backgroundColor="white" color="red" height="50px" width="250px">
        <div style={{
          display: "flex",
          justifyContent:"center",
          alignItem: "center",
        }}>
          Large Negative Button&nbsp;
          <div>
          <FaRegBell/>
          </div>
        </div>
      </StButton>
      <StButton borderColor="pink" backgroundColor="pink" color="red" height="45px" width="130px">Medium</StButton>
      <StButton borderColor="pink" backgroundColor="pink" color="red" height="40px" width="100px">Small</StButton>
      </StBtnRowCtn>
      </div>
    
  );
};

export default Button;

export const StBtnRowCtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 10px;
`
export const StButton = styled.button`
  border: 3px solid black;
  border-color: ${(props) => props.borderColor};
  border-radius: 10px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color ? props.color : "black" };
  cursor: pointer;
`

