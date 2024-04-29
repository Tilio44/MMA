import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div class="container">
      <h2>SE CONNECTER</h2>
      <form onSubmit={handleLogin}>
        <label>
          <span class="visually-hidden">Email</span>
          <input
            type="text"
            id="email"
            aria-label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span class="visually-hidden">Mot de passe</span>
          <input
            type="password"
            id="password"
            aria-label="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Se connecter" />
        <a id="reg-btn" href="/register">S'inscrire</a>
      </form>
    </div>
  );
}

export default LoginPage;
