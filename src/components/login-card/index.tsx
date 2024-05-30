import React, { useState, ChangeEvent } from 'react';
import Input from '../input-login';
import styles from './index.module.css';
import logo from '../../assets/JD-green-logo.svg';
import api from '../../helpers/axios';

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login/', {
        email: username,
        password: password
      });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/home';
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
    }
  };
  
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  

  return (
    <div className={styles.card}>
      <img src={logo} alt="JD Logo" className={styles.logo} />
      <div className={styles.form}>
        <Input
          type="text"
          label="Nome de usuário"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          type="password"
          label="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <a href="#">Precisa de ajuda para acessar?</a>
      </div>
    </div>
  );
};

export default LoginCard;
