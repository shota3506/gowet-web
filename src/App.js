import "./App.css";

import { Header } from "./components/Header.js";
import { Container } from "./components/Container.js";

function App() {
  return (
    <div className="App">
      <Header className="App-header" title={"Go Vet"} />
      <Container />
    </div>
  );
}

export default App;
