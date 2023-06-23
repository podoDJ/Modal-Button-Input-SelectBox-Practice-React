//참고영상 : https://www.youtube.com/watch?v=C845oiKpxcg

import React, { useState } from "react";
import { styled } from "styled-components";
import { VscTriangleDown } from "react-icons/vsc";



const Select = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState("")
  const showDropdown = () => {
    setIsActive(!isActive);
  }
  const options = ['리액트', '자바', '스프링', '리액트네이티브']

  return (
    <StDropdownCtn>
      <h1 style={{ marginTop: "30px" }}>Select</h1> 
      <StDropdown>
        <StDropdownBtn onClick={showDropdown}>{selected || "선택..하실거죠?"}<VscTriangleDown/>
        {/* 드랍다운 그리는 메인로직 */}
        {isActive && (
          <StDropdownContent>
            {/* map함수로 options의 요소 options을 하나하나 돌려서 리턴한다(노란색 (로 시작). 
            DropdownItem을 클릭하면 그 선택한 요소 option을 state에 넣고(setSelcted), 드랍다운 창을 닫는다(setIsActive(false)) */}
            {options.map((option) => (
              <StDropdownItem onClick={(event) => {setSelected(option); setIsActive(false);}}>
              {option}
              </StDropdownItem>
            ))}
          
        </StDropdownContent>
        )}
          


        </StDropdownBtn>
      </StDropdown>
    </StDropdownCtn>
  );
};

export default Select;

const StDropdownCtn = styled.div`
  border: 3px solid grey;
  height: 200px;
  margin-top: 50px;
`;

const StDropdown = styled.div`
  user-select: none;
  width: 300px;
  margin: 20px;
  position: relative;
`;

const StDropdownBtn = styled.div`
  cursor: pointer;
  padding: 15px 20px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;  
`

const StDropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
  width: 95%;
`;

const StDropdownItem = styled.div`
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s;
  &:hover {
    background-color: #f4f4f4;
  }
`;