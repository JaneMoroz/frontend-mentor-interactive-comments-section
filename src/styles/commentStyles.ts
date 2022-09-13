import styled, { css } from "styled-components";

type CommentSectionProps = {
  reply?: boolean;
};

export const CommentSection = styled.div<CommentSectionProps>`
  position: relative;
  width: 100%;

  ${(props) =>
    props.reply === true &&
    css`
      width: 90%;

      @media only screen and (max-width: 37.5em) {
        width: 95%;
      }

      ::after {
        position: absolute;
        content: "";
        display: block;
        top: 0;
        left: -5%;
        height: 100%;
        width: 1px;
        background: ${(props) => props.theme.greyLight};
      }
    `}
`;

// type CommentContainerProps = {
//   reply?: boolean;
// };

export const CommentContainer = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-columns: max-content repeat(2, 1fr);
  row-gap: 1.4rem;
  column-gap: 2.4rem;
  /* width: 100%; */
  background: ${(props) => props.theme.white};
  padding: 2rem 2.4rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.075);
  margin-bottom: 1.6rem;

  p {
    grid-column: 2 / span 2;
    word-wrap: break-word;

    span {
      font-weight: 500;
      color: ${(props) => props.theme.blue};
    }
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr);

    p {
      grid-column: 1 / -1;
    }
  }
`;

export const CommentRating = styled.div`
  grid-row: 1 / span 2;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  row-gap: 1.6rem;
  column-gap: 2rem;
  background: ${(props) => props.theme.greyVeryLight};
  padding: 1.4rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 37.5em) {
    flex-direction: row;
    justify-self: self-start;
    grid-row: 3;
    padding: 0.6rem 1.2rem;
  }

  span {
    color: ${(props) => props.theme.blue};
    font-weight: 500;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;

  @media only screen and (max-width: 37.5em) {
    grid-column: 1 / -1;
  }

  span {
    white-space: nowrap;
  }
`;

export const CommentBadge = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.blue};
  padding: 0.1rem 0.6rem;
  border-radius: 2px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.05);
`;
