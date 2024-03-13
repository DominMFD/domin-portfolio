
import { TInput } from './index.types';
import styles from './style.module.scss';

export default function Input({label, ...rest}: TInput ) {

    return (
        <div className={styles.container}>
            <input className={styles.input} {...rest} />
            <label className={styles.label}>{label}</label>
        </div>
    )
}