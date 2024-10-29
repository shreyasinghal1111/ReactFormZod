import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Error from './components/Error';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/*" element={<Error/>} />

    </Routes>
  );
}

export default App;
