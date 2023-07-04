import styled, { css } from "styled-components";

interface IColorStyledProps {
  background: "purple" | "blue" | "black" | "lilac" | "dark blue";
}

const Container = styled.div<IColorStyledProps>`
  width: 40px;
  height: 40px;

  cursor: pointer;
  border-radius: 4px;

  ${({ background }) => {
    switch (background) {
      case "purple":
        return css`
          background: var(--purple-linear-gradient);
        `;

      case "blue":
        return css`
          background: var(--blue-linear-gradient);
        `;

      case "black":
        return css`
          background: var(--black-linear-gradient);
        `;

      case "lilac":
        return css`
          background: var(--lilac-linear-gradient);
        `;

      case "dark blue":
        return css`
          background: var(--dark-blue-linear-gradient);
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
