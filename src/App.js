import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import Categories from './pages/Categories/Categories';
import ProductDetail from './pages/prodDetail/ProductDetail';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/product/:productId" element={<ProductDetail />} ></Route>
        <Route path="/category/:categortId?" element={<Categories />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>



      </Routes>
    </>
  );
}

export default App;
