import { FC } from "react";
import styled from "styled-components";

type SelectInputProps = {
  text: string;
};

const StyledSelectInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 24px;
  background-color: #fff;
  border: 1px solid #ececec;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const SelectInput: FC<SelectInputProps> = ({ text }) => {
  return (
    <StyledSelectInput>
      <input type="checkbox" />
      {text}
    </StyledSelectInput>
  );
};
