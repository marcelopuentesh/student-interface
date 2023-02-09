import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import Assistance from "./Components/Assistance";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/assistance" element={<Assistance />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
