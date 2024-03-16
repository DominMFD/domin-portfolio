import { TTextArea } from './index.type'
import styles from './style.module.scss'

export default function TextArea({ label, ...rest}: TTextArea) {
    
    return (
    <div className={styles.container}>
        <textarea className={styles.input} {...rest} />
        <label className={styles.label}>{label}</label>
    </div>
    )
}