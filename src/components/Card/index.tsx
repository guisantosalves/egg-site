import styles from "./card.module.css";
import Image from "next/image";

type Props = {
  titulo: string;
  tempo: number;
  porcoes: number;
  images: string;
};

export default function Card({ titulo, tempo, porcoes, images }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.containerImage}>
        <img src={images} alt={"default alt"} className={styles.image} />
        <h2 className={styles.card__title}>{titulo}</h2>
      </div>
      <div>
        <div className={styles.containerTitleBottom}>
          <img
            src={"/images/time 1.svg"}
            alt="clock"
            style={{ marginRight: "0.6rem" }}
          />
          <span className={styles.card__info}>{tempo} minutos</span>
        </div>
        <div className={styles.containerTitleBottom}>
          <img
            src={"/images/pot-of-food 1.svg"}
            alt="pot of food"
            style={{ marginRight: "0.6rem" }}
          />
          <span className={styles.card__info}>{porcoes} pessoas</span>
        </div>
      </div>
    </div>
  );
}
