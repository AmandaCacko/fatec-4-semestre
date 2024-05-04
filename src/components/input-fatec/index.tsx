import styles from './index.module.css';
import { IMaskInput } from 'react-imask';

interface Props {
    type: 'text' | 'email' | 'number'
    label: string
    initialValue?: string
    placeholder?: string
    mask?: string
}

function Input({ type, label, initialValue = '', placeholder = '', mask = ''}: Props) {
    if (mask) {
        return (
            <div className={styles.container}>
                <label className={styles.label}>{label}</label>
                <IMaskInput
                    className={styles.input}
                    mask={mask}
                    type={type}
                    defaultValue={initialValue}
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
                defaultValue={initialValue}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;
