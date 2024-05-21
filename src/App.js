import './App.css';
import { Navbar } from './components/Navbar';
import { About, Contact, Services, Home, Products } from './components/pages';
import {Route, Routes} from 'react-router-dom';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
