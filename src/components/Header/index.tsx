import styles from "./header.module.css";
import imageFrig from "../../../public/frigideira.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.containerHead}>
      <div className={styles.container}>
        <div className={styles.container_svgImg}>
          <Image src={imageFrig} alt="Imagem de uma frigideira" />
        </div>
        <div>
          <h1 className={styles.header__title}>Fritando Ovo</h1>
          <h2 className={styles.subtitle}>Receitas fáceis</h2>
        </div>
      </div>
    </header>
  );
}
