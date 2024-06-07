import { CardContext } from "../../context/CardContext";
import { Container, Label } from "./style";
import { useContext } from "react";

const Input = () => {
  const { setChangeName } = useContext(CardContext);

  return (
    <Container>
      <Label>Nome completo</Label>

      <input onChange={(e) => setChangeName(e.target.value)} maxLength={24} />
    </Container>
  );
};

export { Input };
