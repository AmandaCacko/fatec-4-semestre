import React from "react";
import Input from "../input-login";
import styles from "./index.module.css";
import logo from "../../assets/JD-green-logo.svg";

interface LoginCard {}

const Card: React.FC<LoginCard> = () => {
  return (
    <div className={styles.card}>
      <img
        src={logo}
        alt="JD Logo"
        className={styles.logo}
      />
      <div className={styles.form}>
        <Input type="text" label="Nome de usuário" />
        <Input type="password" label="Senha" />
        <button className={styles.button}>Login</button>
        <a>Precisa de ajuda para acessar?</a>
      </div>
    </div>
  );
};

export default Card;
