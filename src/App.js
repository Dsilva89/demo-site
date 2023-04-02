import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SigninPage/>} />
    </Routes>
    
  );
}

export default App;
