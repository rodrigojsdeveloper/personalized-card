import styled, { css } from "styled-components";

interface IButtonStyled {
  color: "white" | "purple";
}

const Container = styled.button<IButtonStyled>`
  width: 100%;
  max-width: 208px;
  height: 48px;

  font-weight: 500;
  font-size: 18px;
  line-height: 21.94px;

  border-radius: 4px;

  ${({ color }) => {
    switch (color) {
      case "white":
        return css`
          color: var(--purple-color);
          background-color: var(--white-color);
          border: 2px solid var(--purple-color);

          margin-right: 16px;
        `;

      case "purple":
        return css`
          color: var(--white-color);
          background-color: var(--purple-color);
          border: 2px solid var(--purple-color);
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
