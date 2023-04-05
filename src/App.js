import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
