import styled from "styled-components";

export const CommentInputContainer = styled.div`
  background: ${(props) => props.theme.white};
  padding: 2rem 2.4rem;
  border-radius: 1rem;
  width: 100%;
  margin-top: 1.6rem;

  img {
    height: 4.8rem;
    width: 4.8rem;
  }
`;

export const CommentInputForm = styled.form`
  position: relative;
  display: flex;
  align-items: flex-start;
  column-gap: 1.6rem;
  flex: 1;
  label {
    position: absolute;
    height: 0;
    opacity: 0;
  }

  textarea {
    flex: 1;
    border: 1px solid ${(props) => props.theme.greyLight};
    border-radius: 1rem;
    padding: 1rem;
    color: inherit;
  }
`;
