import { FC } from "react";
import styled from "styled-components";

const StyledSelectInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 70px;
  padding: 0 24px;
  background-color: "#fff";
  border: 3px solid #ececec;
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

  &.error {
    background-color: rgba(255, 0, 0, 0.8);
    /* animation: errorAnimation 1s linear forwards; */
    animation: doubleScale 2s linear forwards;
    color: white;

    &:hover {
      background-color: rgba(255, 0, 0, 0.8);
      color: white;
    }
  }

  &:hover {
    background-color: #f5f5f5;
    border: 3px solid #e7e7e7;
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

  @keyframes errorAnimation {
    0% {
      background-color: rgba(255, 0, 0, 0.8);
    }
    /* 70% {
      background-color: red;
    } */
    100% {
      background-color: #fff;
    }
  }

  @keyframes doubleScale {
    0% {
      background-color: rgba(255, 0, 0, 0.8);
      transform: scale(1);
    }
    5% {
      transform: scale(1.015);
    }
    10% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.015);
    }
    20% {
      transform: scale(1);
    }
    30% {
      background-color: rgba(255, 0, 0, 0.8);
    }

    100% {
      background-color: white;
    }
  }
`;

type SelectInputProps = {
  text: string;
  isChecked: boolean;
  isDisabled: boolean;
  isError: boolean;
  handleChange: () => void;
};

export const SelectInput: FC<SelectInputProps> = ({
  text,
  isChecked,
  isDisabled,
  isError,
  handleChange,
}) => {
  const classReducer = () => {
    if (isError) return "error";
    if (isDisabled) return "disabled";
    if (isChecked) return "checked";

    return "";
  };
  return (
    <StyledSelectInput className={classReducer()}>
      <input
        type="checkbox"
        disabled={isDisabled || isError}
        onChange={handleChange}
        checked={isChecked}
      />
      <span>{text}</span>
    </StyledSelectInput>
  );
};
