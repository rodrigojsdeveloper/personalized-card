import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 81px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  & > input {
    width: 100%;
    height: 48px;

    border: 0;
    border-radius: 4px;
    background-color: var(--white-color-10);

    padding: 10px;

    &:hover, &:focus {
      border: 2px solid var(--gray-color);
    }
  }
`

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.94px;

  color: var(--gray-color);
`

export { Container, Label }
