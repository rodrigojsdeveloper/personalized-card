import { Container, Label } from "./style";

interface InputProps {
  label: string;
}

const Input = ({ label }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>

      <input />
    </Container>
  );
};

export { Input };
