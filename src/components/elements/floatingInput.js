import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 1% 0;
  width: 40%;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 100%;
  height: 45px;
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 14px;
  transition: 0.3s ease all;

  ${Input}:focus ~ & {
    top: 6px;
    left: 5px;
    font-size: 11px;
    opacity: 0.6;
  }
`;

const FloatingInput = () => (
  <Wrapper>
    <Input />
    <Label>First Name</Label>
  </Wrapper>
);

export default FloatingInput;