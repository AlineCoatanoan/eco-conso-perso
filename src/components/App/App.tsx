import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../../pages/HomePage';
import About from '../../pages/About';
import Footer from '../Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
