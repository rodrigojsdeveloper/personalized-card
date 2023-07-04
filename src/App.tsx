import { ContainerGlobal, ContentGlobal } from "./styles/global";
import { Container } from "./components/Container";
import waves from "./assets/waves.svg";

const App = () => {
  return (
    <ContainerGlobal>
      <Container />

      <ContentGlobal>
        <img src={waves} alt="waves" />
      </ContentGlobal>
    </ContainerGlobal>
  );
};

export { App };
