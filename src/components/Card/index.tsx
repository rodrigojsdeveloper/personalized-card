import { ContainerHorizontal, ContainerVertical } from "./style.ts";
import { CardContext } from "../../context/CardContext/index.tsx";
import logoBorder from "../../assets/card_logo_border.svg";
import logoWhite from "../../assets/card_logo_white.svg";
import cardFlag from "../../assets/card_flag.svg";
import { useContext } from "react";

const Card = () => {
  const { changeLogo, changeName, changeSize } = useContext(CardContext);

  return changeSize ? (
    <ContainerVertical>
      <div>
        <img src={cardFlag} alt="Card Flag" />
      </div>

      <div>
        <img src={changeLogo ? logoBorder : logoWhite} alt="Logo Nubank" />

        <p>{changeName}</p>
      </div>
    </ContainerVertical>
  ) : (
    <ContainerHorizontal>
      <div>
        <img src={cardFlag} alt="Card Flag" />
      </div>

      <div>
        <img src={changeLogo ? logoBorder : logoWhite} alt="Logo Nubank" />

        <p>{changeName}</p>
      </div>
    </ContainerHorizontal>
  );
};

export { Card };
