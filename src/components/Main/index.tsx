import Image from "next/image";
import styles from "./styles.module.scss";
import Photo from "../../../public/ImageMain.png";
import MainCard from "../MainCard";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image__container}>
          <Image
            className={styles.image}
            src={Photo}
            alt="Dominguera no espaço"
          />
        </div>
        <MainCard />
      </div>
    </div>
  );
}
