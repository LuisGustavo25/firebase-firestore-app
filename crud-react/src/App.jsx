import Listadodenombres from "./components/Listadodenombres";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Proops</h1>
      <div className="row">
        <div className="col">
          <Card 
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo 1"
            texto="texto 1">
        </Card>
        </div>
        <div className="col">
          <Card 
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo 2"
            texto="texto 2">
        </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
