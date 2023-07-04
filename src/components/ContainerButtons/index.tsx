import { CardContext } from "../../context/CardContext";
import { Container, Content } from "./style";
import { Label } from "../Input/style";
import { Button } from "../Button";
import { useContext } from "react";

const ContainerButtons = () => {
  const { changeSize, setChangeSize } = useContext(CardContext);

  return (
    <Container>
      <Label>Selecione o modelo do cartão</Label>

      <Content>
        <Button
          color={changeSize ? "white" : "purple"}
          onClick={() => setChangeSize(false)}
        >
          Horizontal
        </Button>
        <Button
          color={changeSize ? "purple" : "white"}
          onClick={() => setChangeSize(true)}
        >
          Vertical
        </Button>
      </Content>
    </Container>
  );
};

export { ContainerButtons };
