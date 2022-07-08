import Form from "./components/submitForm/submitForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import { useState } from "react";

function App() {

  const [isAuth, setAuth] = useState(false);

  return (
    <Router>
      <Nav sa = {setAuth} a={isAuth}/>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/post" element={<Form/>}/>
    </Routes>
    </Router>
  );
}

export default App;