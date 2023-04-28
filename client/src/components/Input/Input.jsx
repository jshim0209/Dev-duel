import styled from "styled-components";

const Input = styled.input`
  width: 40vw;
  border: none;
  border-bottom: 1px solid #333;
  /* color: #ebebd3; */
  background: transparent;
  text-align: center;
  font-size: 1.5em;
  margin: 10px;
  &::placeholder {
    color: #030303;
  }
  &:focus {
    outline: none;
  }
`;

export default Input;
