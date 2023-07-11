import './App.css';
import Login from './pages/login';
import Home from './pages/home'
// import Greeting from './components/Greeting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
      
    </>
    

  );
}

export default App;
