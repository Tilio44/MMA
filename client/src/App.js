import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./login.jsx";
import HomePage from "./home.jsx";
import Register from "./register.jsx";
import EventList from "./mma_event.jsx";
import MatchDetails from "./mma_matchs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:eventName/:odds/:imageFighter1/:imageFighter2" element={<MatchDetails />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
