import styled, { css } from "styled-components";

type ModalContainerProps = {
  isVisible?: boolean;
};

export const ModalContainer = styled.div<ModalContainerProps>`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(103, 115, 126, 0.7);

  ${(props) =>
    props.isVisible === true &&
    css`
      display: block;
    `}
`;

export const ModalInnerContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  background: ${(props) => props.theme.white};
  padding: 3.2rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.075);

  h1 {
    color: ${(props) => props.theme.blueDark};
    font-weight: 500;
    align-self: flex-start;
  }
`;
