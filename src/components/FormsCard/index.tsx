import Input from '../Input'
import SubmitButton from '../SubmitButton'
import TextArea from '../TextArea'
import styles from './styles.module.scss'

export default function Forms() {

    return (
        <form className={styles.container}>
            <Input label='Nome' required type='text' />
            <Input label='Email' required type='email'/>
            <Input label='Assunto' required type='text' />
            <TextArea label='Mensagem' required />
            <SubmitButton />
        </form>
    )
}