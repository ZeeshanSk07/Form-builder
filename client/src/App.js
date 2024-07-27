import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Notfound from "./pages/Notfound";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreateTypebot from "./pages/CreateTypebot";
import Themebar from "./components/Themebar";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [userId, setUserId] = useState("");
  const [theme, setTheme] = useState("");
  const [themeId, setThemeId] = useState("");
  const [typebotId, setTypebotId] = useState("");
  const [formName, setFormName] = useState("");
  const [selectedbtn, setSelectedbtn] = useState([]);
  const [parent, setParent] = useState('');


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                userId={userId}
                setUserId={setUserId}
                theme={theme}
                setTheme={setTheme}
                setThemeId={setThemeId}
                typebotId={typebotId}
                setTypebotId={setTypebotId}
                formName={formName}
                selectedbtn={selectedbtn}
                setFormName={setFormName}
                setSelectedbtn={setSelectedbtn}
                parent={parent}
                setParent={setParent}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                userId={userId}
                setUserId={setUserId}
              />
            }
          />
          <Route path="/themebar" element={<Themebar />} />
          <Route
            path="/createtypebot"
            element={
              <CreateTypebot
                userId={userId}
                formName={formName}
                setFormName={setFormName}
                selectedbtn={selectedbtn}
                setSelectedbtn={setSelectedbtn}
                theme={theme}
                setTheme={setTheme}
                themeId={themeId}
                setThemeId={setThemeId}
                typebotId={typebotId}
                setTypebotId={setTypebotId}
                parent={parent}
                setParent={setParent}
              />
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
