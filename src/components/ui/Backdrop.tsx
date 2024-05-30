import styled from "styled-components";

export const Backdrop = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.45);

  @media (max-width: 992px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;
