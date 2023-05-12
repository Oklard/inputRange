import Barra from "./Components/Barra";
import "./App.css";

function App() {
  // teste(count);
  return (
    <>
      <div>
        <h3>
          Qual é o meu horizonte de investimento? Em outras palavras, por quanto
          tempo eu pretendo investir esse dinheiro?
        </h3>
        <h5>
          Considere o meio como neutro a sua esquerda como pouco e a direita
          como muito
        </h5>
        <Barra />

        <h3>Teste</h3>
        <Barra />
      </div>
    </>
  );
}

export default App;
