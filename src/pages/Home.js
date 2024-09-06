import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/adminAuthService';
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/admin-dashboard'); // Redirige vers le tableau de bord admin
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container">
      <div className="form-column">
        <div className="header">
          <h2>Administration - Bibliothèque Cloud Native</h2>
          <p>Veuillez vous connecter avec vos identifiants administrateur.</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de Passe"
            required
          />
          <button className="blue-btn" type="submit">Connexion</button>
        </form>
      </div>

      <div className="image-column">
        <img src="/Admin-rafiki.png" alt="Library Illustration"/>
      </div>
    </div>
  );
};

export default Home;
