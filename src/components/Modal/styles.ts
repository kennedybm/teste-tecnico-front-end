import styled, { keyframes } from "styled-components";

const openAnimation = keyframes`
0%{transform:scale(0)}100%{transform:scale(1)}
`;

export const ModalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0%;
  width: fit-content;
  z-index: 4;
  animation: ${openAnimation} 0.8s linear;

  @media (min-width: 768px) {
    display: none;
  }
`;
