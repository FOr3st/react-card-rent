import styled from "styled-components";

export interface InputProps {
  disabled?: boolean;
}

export const Input = styled.input<InputProps>`
  display: inline-block;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  padding: 7px 12px;
  vertical-align: middle;
  font-size: 15px;
  line-height: 16px;
  outline: none;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: ${({ disabled }) => (disabled ? "lightgrey" : "#6e6a6e")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  :hover {
    background-color: ${({ disabled }) => (disabled ? "lightgrey" : "#8f8e8f")};
  }
`;
