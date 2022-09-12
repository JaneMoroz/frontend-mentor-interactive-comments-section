import styled, { css } from "styled-components";

type CommentContainerProps = {
  reply?: boolean;
};

export const CommentContainer = styled.div<CommentContainerProps>`
  position: relative;
  background: ${(props) => props.theme.white};
  padding: 2rem 2.4rem;
  border-radius: 1rem;
  width: 100%;

  ${(props) =>
    props.reply === true &&
    css`
      width: 90%;

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

export const CommentRating = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  background: ${(props) => props.theme.greyVeryLight};
  padding: 1.4rem;
  margin-right: 2.4rem;
  border-radius: 1rem;

  span {
    color: ${(props) => props.theme.blue};
    font-weight: 500;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;
  margin-bottom: 1.6rem;

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
`;
