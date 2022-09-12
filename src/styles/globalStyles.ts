import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  width: 100%;
  padding: 5rem 1.8rem;
  margin: 0 auto;
`;

type FlexProps = {
  spaceBetween?: boolean;
  alignEnd?: boolean;
  column?: boolean;
  buttonsContainer?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.6rem;
  row-gap: 1.6rem;

  ${(props) =>
    props.spaceBetween === true &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.alignEnd === true &&
    css`
      align-items: end;
    `}
  ${(props) =>
    props.column === true &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.buttonsContainer === true &&
    css`
      flex: 1;
      justify-content: end;
    `}
`;

type ButtonProps = {
  textWithIcon?: boolean;
  delete?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${(props) =>
    props.textWithIcon === true &&
    css`
      color: ${(props) => props.theme.blue};
      font-weight: 500;
      display: flex;
      column-gap: 0.8rem;
    `}
  ${(props) =>
    props.delete === true &&
    css`
      color: ${(props) => props.theme.red};
    `}
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.blueDark};

  img {
    height: 3.6rem;
    width: 3.6rem;
  }
`;
