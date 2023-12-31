import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Menu from './pages/Menu';
import Produtos from './pages/Produtos';
import Produto1 from "./pages/produto1";
import Produto2 from "./pages/produto2";
import Produto3 from "./pages/produto3";
import Produto4 from "./pages/produto4";
import PgSolucao from "./pages/PgSolucao";

function App() {
  return (
  <div>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/produto1" element={<Produto1/>}/>
            <Route path="/produto2" element={<Produto2/>}/>
            <Route path="/produto3" element={<Produto3/>}/>
            <Route path="/produto4" element={<Produto4/>}/>
            <Route path="/solucao" element={<PgSolucao/>}/>
          </Routes>
    </BrowserRouter>
  </div>
    )
}
export default App