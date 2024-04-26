import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <div>
            {backendData.users ? (
              backendData.users.map((user, i) => <p key={i}>{user}</p>)
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
