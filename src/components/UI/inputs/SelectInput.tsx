import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const StyledSelectInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 70px;
  padding: 0 24px;
  background-color: "#fff";
  border: 1px solid #ececec;
  margin-bottom: 16px;
  cursor: pointer;

  &.checked {
    background-color: green;
    color: white;

    &:hover {
      background-color: #006900;
    }
  }

  &.disabled {
    animation: completed 1s linear forwards;
    color: black;
    cursor: default;
  }

  &:hover {
    background-color: #f5f5f5;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 0px 5px 0px rgba(240, 240, 240, 1);
  }

  input {
    display: none;
  }

  span {
    line-height: 130%;
    max-height: 2.6em;
    overflow: hidden;
  }

  @keyframes completed {
    0% {
      background-color: green;
    }
    100% {
      background-color: #e6e6e6;
    }
  }
`;

type SelectInputProps = {
  text: string;
  isChecked: boolean;
  isDisabled: boolean;
  handleChange: () => void;
};

export const SelectInput: FC<SelectInputProps> = ({
  text,
  isChecked,
  isDisabled,
  handleChange,
}) => {
  const classReducer = () => {
    if (isDisabled) return "disabled";
    if (isChecked) return "checked";
    return "";
  };
  return (
    <StyledSelectInput className={classReducer()}>
      <input
        type="checkbox"
        disabled={isDisabled}
        onChange={handleChange}
        checked={isChecked}
      />
      <span>{text}</span>
    </StyledSelectInput>
  );
};
