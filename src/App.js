import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Codes from './pages/codes/codes';
import Navbar from './components/Navbar/Navbar.jsx';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/:savedFile"  element={<Home/>} />
        <Route path="/codes" element={<Codes/>} />
      </Routes>
    </Router>
  );
}

export default App;
