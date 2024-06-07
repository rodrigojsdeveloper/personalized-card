import { ContainerGlobal, ContentGlobal } from "./styles/global";
import { Container } from "./components/Container";
import waveMobile from "./assets/wave_mobile.svg";
import { Card } from "./components/Card";
import wave from "./assets/waves.svg";

const App = () => {
  return (
    <ContainerGlobal>
      <Container />

      <ContentGlobal>
        <img src={wave} alt="wave" className="waveDesktop" />
        <img src={waveMobile} alt="wave" className="waveMobile" />
        <Card />
      </ContentGlobal>
    </ContainerGlobal>
  );
};

export { App };
