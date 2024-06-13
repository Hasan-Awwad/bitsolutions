import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import HomeBody from './HomeBody.jsx';
import Products from './Products.jsx'
import Careers from './Careers.jsx'
import Contact from './Contact.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomeBody />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
