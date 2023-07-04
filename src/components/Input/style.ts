import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 81px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  margin-bottom: 24px;

  & > input {
    width: 100%;
    height: 48px;

    border: 0;
    border-radius: 4px;
    background-color: var(--white-color-10);

    padding: 10px 15px;

    &:hover, &:focus {
      border: 1px solid var(--gray-color);
      background-color: var(--white-color);
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
