import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (

    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </div>

    </Router>


  );
}

export default App;
