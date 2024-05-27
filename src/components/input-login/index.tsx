import React, { ChangeEvent } from "react";
import styles from "./index.module.css";

interface Props {
  type: "text" | "email" | "password";
  label: string;
  initialValue?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type,
  label,
  placeholder = "",
  value,
  onChange
}: Props) => {

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
