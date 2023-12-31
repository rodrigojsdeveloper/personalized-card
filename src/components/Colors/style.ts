import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 432px;
  height: 73px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  margin-bottom: 24px;
`

const Content = styled.div`
  width: 100%;
  max-width: 248px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export { Container, Content }
