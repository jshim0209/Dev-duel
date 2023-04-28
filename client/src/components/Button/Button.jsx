import styled from "styled-components";

const Button = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border: 1px solid black;
  background: ${({ bg }) => bg};
  border-radius: 15px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
