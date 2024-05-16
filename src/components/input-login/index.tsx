import React from "react";
import styles from "./index.module.css";

interface Props {
  type: "text" | "email" | "password";
  label: string;
  initialValue?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  type,
  label,
  initialValue = "",
  placeholder = "",
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        defaultValue={initialValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
