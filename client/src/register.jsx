import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, lastname, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/login");
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <div class="container">
      <h2>S'INSCRIRE</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span class="visually-hidden">Prénom</span>
          <input
            type="text"
            required
            pattern="[A-Za-z]+"
            title="Le prénom ne doit contenir que des lettres"
            aria-label="Prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span class="visually-hidden">Nom</span>
          <input
            type="text"
            required
            pattern="[A-Za-z]+"
            title="Le nom ne doit contenir que des lettres"
            aria-label="Nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label>
          <span class="visually-hidden">Email</span>
          <input
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Veuillez entrer une adresse e-mail valide"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span class="visually-hidden">Mot de passe</span>
          <input
            type="password"
            required
            minLength="8"
            aria-label="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
}

export default Register;
