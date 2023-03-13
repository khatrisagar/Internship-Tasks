import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
