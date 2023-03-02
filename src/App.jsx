import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { FormularioProvider } from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      <FormularioProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </FormularioProvider>
    </div>
  );
}

export default App;
