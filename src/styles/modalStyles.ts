import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(103, 115, 126, 0.7);
`;

export const ModalInnerContainer = styled.div`
  margin: 0 auto;
  margin-top: 30vh;
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
