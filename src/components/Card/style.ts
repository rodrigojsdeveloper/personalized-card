import styled from "styled-components";

interface ICardStyle {
  changeColor:
    | "var(--purple-linear-gradient)"
    | "var(--blue-linear-gradient)"
    | "var(--black-linear-gradient)"
    | "var(--lilac-linear-gradient)"
    | "var(--dark-blue-linear-gradient)";
}

const ContainerHorizontal = styled.div<ICardStyle>`
  width: 650px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 32px;
  box-shadow: 0px 32px 64px 0px #00000040;
  background: ${(props) => props.changeColor};

  padding: 30px 38px;

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
`;

const ContainerVertical = styled.div<ICardStyle>`
  width: 350px;
  height: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 32px;
  box-shadow: 0px 32px 64px 0px #00000040;
  background: ${(props) => props.changeColor};

  padding: 25px 30px;

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
`;

export { ContainerHorizontal, ContainerVertical };
