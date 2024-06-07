import { ContainerButtons } from "../ContainerButtons";
import { ContainerStyle, ContentStyle } from "./style";
import { Colors } from "../Colors";
import { Input } from "../Input";
import { Logos } from "../Logos";

const Container = () => {
  return (
    <ContainerStyle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="73px"
        height="73px"
        viewBox="0 0 24 24"
      >
        <path
          fill="#820AD1"
          d="M7.28 5.434a4 4 0 0 0-2.944 1.252h-.002q-.08-.003-.162-.002A4.19 4.19 0 0 0 .473 8.94c-.308.6-.423 1.244-.459 1.9c-.032.589 0 1.186 0 1.77v5.652h3.17s.002-2.784 0-5.178c-.001-1.611-.012-3.047 0-3.342c.056-1.394.437-2.305 1.148-3.05c2.359.001 3.886 1.608 3.97 4.167c.02.588.026 3.73.026 3.73v3.673h3.168v-4.965c0-1.5.013-2.8-.092-3.695c-.292-2.5-1.82-4.168-4.124-4.168m8.39.3l-3.166.004v4.965c0 1.501-.013 2.8.092 3.695c.292 2.5 1.82 4.168 4.124 4.168a4 4 0 0 0 2.944-1.252h.002q.081.003.164.002c1.543 0 2.99-.883 3.697-2.255c.309-.6.423-1.245.459-1.9c.032-.59 0-1.187 0-1.77V5.738h-3.17s-.002 2.784 0 5.178c.002 1.611.012 3.047 0 3.342c-.056 1.393-.437 2.305-1.148 3.05c-2.359-.001-3.886-1.609-3.97-4.167a156 156 0 0 1-.028-3.733Z"
        />
      </svg>

      <ContentStyle>
        <h1>Deixe seu roxinho com a sua cara :)</h1>
        <hr />
      </ContentStyle>

      <Input />
      <Colors />
      <ContainerButtons />
      <Logos />
    </ContainerStyle>
  );
};

export { Container };
