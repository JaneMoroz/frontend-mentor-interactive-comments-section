import styled from "styled-components";

export const CommentInputContainer = styled.div`
  background: ${(props) => props.theme.white};
  padding: 2rem 2.4rem;
  border-radius: 1rem;
  width: 100%;
  margin-top: 1.6rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.075);

  img {
    height: 4.8rem;
    width: 4.8rem;

    @media only screen and (max-width: 37.5em) {
      height: 3.6rem;
      width: 3.6rem;
    }
  }
`;

export const CommentInputForm = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  justify-content: center;
  column-gap: 1.6rem;
  row-gap: 1.6rem;

  @media only screen and (max-width: 37.5em) {
    align-items: center;
    grid-template-columns: 1fr auto;
  }

  label {
    position: absolute;
    height: 0;
    opacity: 0;
  }

  textarea {
    resize: none;
    border: 1px solid ${(props) => props.theme.greyLight};
    border-radius: 1rem;
    padding: 1rem;
    color: inherit;

    @media only screen and (max-width: 37.5em) {
      grid-row: 1;
      grid-column: 1/-1;
    }
  }
`;
