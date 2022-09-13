import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  width: 100%;
  padding: 5rem 1.8rem;
  margin: 0 auto;
`;

type FlexProps = {
  alignEnd?: boolean;
  column?: boolean;
  buttonsContainer?: boolean;
  fullWidth?: boolean;
  marginBottom?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.6rem;
  row-gap: 1.6rem;

  ${(props) =>
    props.alignEnd === true &&
    css`
      align-items: flex-end;
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

      @media only screen and (max-width: 37.5em) {
        grid-row: 3;
      }
    `}
  ${(props) =>
    props.fullWidth === true &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.marginBottom === true &&
    css`
      margin-bottom: 1.6rem;
    `}
`;

type ButtonProps = {
  icon?: boolean;
  textWithIcon?: boolean;
  delete?: boolean;
  primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8rem;
  transition: all 0.3s;

  ${(props) =>
    props.icon === true &&
    css`
      path {
        transition: all 0.3s;
      }
      :hover path {
        fill: ${(props) => props.theme.grey};
      }
    `}
  ${(props) =>
    props.textWithIcon === true &&
    css`
      color: ${(props) => props.theme.blue};
      font-weight: 500;

      path {
        transition: all 0.3s;
      }

      :hover {
        color: ${(props) => props.theme.bluePale};
      }
      :hover path {
        fill: ${(props) => props.theme.bluePale};
      }
    `}
  ${(props) =>
    props.delete === true &&
    css`
      color: ${(props) => props.theme.red};

      :hover {
        color: ${(props) => props.theme.paleRed};
      }
      :hover path {
        fill: ${(props) => props.theme.paleRed};
      }
    `}
  ${(props) =>
    props.primary === true &&
    css`
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      text-transform: uppercase;
      padding: 1.2rem 2.4rem;
      border-radius: 7px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.075);

      :hover {
        background: ${(props) => props.theme.bluePale};
      }
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
