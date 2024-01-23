import Image from 'next/image';
import styles from './styles.module.scss';
import Photo from '../../../public/ImageMain.png'

export default function Main() {

    return (
        <div className={styles.container}>
            <div className={styles.image__container}>
                <Image className={styles.image} src={Photo} alt='Dominguera no espaço'/>
            </div>
            <div className={styles.description__container}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis dolores placeat exercitationem debitis atque recusandae sed explicabo voluptate quasi veniam mollitia cum quia est iste at, eligendi aliquid doloribus?</span>
                <div>
                
                </div>
                <button>bom dia</button>
            </div>
        </div>
    )
}