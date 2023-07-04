import styled, { keyframes } from "styled-components";

interface ICardStyle {
  changeColor:
    | "var(--purple-linear-gradient)"
    | "var(--blue-linear-gradient)"
    | "var(--black-linear-gradient)"
    | "var(--lilac-linear-gradient)"
    | "var(--dark-blue-linear-gradient)";
}

const cardAnimationHorizontal = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const cardAnimationVertical = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ContainerHorizontal = styled.div<ICardStyle>`
  width: 600px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 32px;
  box-shadow: 0px 32px 64px 0px #00000040;
  background: ${(props) => props.changeColor};

  padding: 30px 38px;
  animation: ${cardAnimationHorizontal} 1s ease-in-out alternate;

  & > div:nth-child(1) {
    width: 100%;
    text-align: right;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > p {
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      color: var(--white-color);
      margin-left: 32px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 20px 28px;

    & > div {
      & > img {
        width: 70px;
        height: 70px;
      }

      p {
        font-size: 16px !important;
      }
    }
  }
`;

const ContainerVertical = styled.div<ICardStyle>`
  width: 350px;
  height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 32px;
  box-shadow: 0px 32px 64px 0px #00000040;
  background: ${(props) => props.changeColor};

  padding: 25px 30px;
  animation: ${cardAnimationVertical} 1s ease-in-out alternate;

  & > div:nth-child(1) {
    width: 100%;
    text-align: left;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column-reverse;
    align-items: start;

    & > p {
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      color: var(--white-color);
      margin-bottom: 128px;
    }
  }

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    padding: 20px 28px;

    & > div {
      & > img {
        width: 70px;
        height: 70px;
      }

      p {
        font-size: 16px !important;
      }
    }
  }
`;

export { ContainerHorizontal, ContainerVertical };
