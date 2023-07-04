import { CardContext } from "../../context/CardContext/index.tsx";
import logoBorder from "../../assets/card_logo_border.svg";
import logoWhite from "../../assets/card_logo_white.svg";
import cardFlag from "../../assets/card_flag.svg";
import { Container } from "./style.ts";
import { useContext } from "react";

const Card = () => {
  const { changeLogo } = useContext(CardContext);

  return (
    <Container>
      <div>
        <img src={cardFlag} alt="Card Flag" />
      </div>

      <div>
        <img src={changeLogo ? logoBorder : logoWhite} alt="Logo Nubank" />

        <p>rodrigo</p>
      </div>
    </Container>
  );
};

export { Card };
