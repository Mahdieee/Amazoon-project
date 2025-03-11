import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import Header from './UI/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Basket from './pages/Basket'
import Notfound from './pages/Notfound'
import Footer from './UI/Footer'
function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="/Basket" element={<Basket />} /> 
          <Route path="/Notfound" element={<Notfound />} />
        </Routes>
        <Footer />
        </BrowserRouter>




        </div>
        );
}

        export default App;
