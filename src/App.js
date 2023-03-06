import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './layout/Menu'
import Rodape from './layout/Rodape'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Servicos from './paginas/Servicos'
import Portifolio from './paginas/Portifolio'
import Contato from './paginas/Contato'

function App() {
  return (
    <Router>
    <Menu />
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/sobre" element={<Sobre />} />
       <Route path="/servicos" element={<Servicos />} />
       <Route path="/portifolio" element={<Portifolio />} />
       <Route path="/contato" element={<Contato />} />
      </Routes>
      <Rodape />
     </Router>
  );
}

export default App;
