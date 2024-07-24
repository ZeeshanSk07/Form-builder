import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Notfound from "./pages/Notfound";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from "react";
import CreateTypebot from "./pages/CreateTypebot";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path="/settings" element={<Settings currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/createtypebot" element={<CreateTypebot/>} />
          <Route path= '*' element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
