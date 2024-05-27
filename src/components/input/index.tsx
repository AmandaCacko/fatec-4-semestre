import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';
import { IMaskInput } from 'react-imask';

interface Props {
    type: 'text' | 'email' | 'number' | 'password';
    label: string;
    value: any;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    mask?: string;
}

function Input({ type, label, value, onChange, placeholder = '', mask = '' }: Props) {
    if (mask) {
        return (
            <div className={styles.container}>
                <label className={styles.label}>{label}</label>
                <IMaskInput
                    className={styles.input}
                    mask={mask}
                    type={type}
                    value={value}
                    onAccept={(value: any) => onChange && onChange({ target: { value } } as ChangeEvent<HTMLInputElement>)}
                    placeholder={placeholder}
                />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                type={type}
                value={value} // garantindo que value esteja definido ou seja uma string vazia
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
