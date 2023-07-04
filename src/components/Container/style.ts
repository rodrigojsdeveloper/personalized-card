import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 432px;

  padding: 40px 0 64px 80px;

  & > button {
    float: right;
  }
`;

const ContentStyle = styled.div`
  width: 100%;
  max-width: 344px;

  margin-bottom: 88px;

  & > h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;

    color: var(--purple-color);
    margin-top: 72px;
  }

  & > hr {
    width: 80px;
    height: 8px;

    border: 0;
    background-color: var(--white-color-10);

    margin-top: 12px;
  }
`;

export { ContainerStyle, ContentStyle };
