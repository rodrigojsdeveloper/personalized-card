import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 432px;
  height: 101px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`

const Content = styled.div`
  width: 100%;
  max-width: 346.92px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > svg {
    cursor: pointer;
  }
`

export { Container, Content }
