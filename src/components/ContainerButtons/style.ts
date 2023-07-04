import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 81px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Content = styled.div`
  width: 100%;
  max-width: 432px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { Container, Content };
