import './App.css';
import Home from './components/homepage'
import Maindata from './components/maindata';
import FilterData from './components/FilterData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Maindata" element={<Maindata />} />
          <Route path="/Main" element={<FilterData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
