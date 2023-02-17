import Card from "../Card";
import styles from "./cardList.module.css";

export type Receitas = {
  id: number;
  titulo: string;
  tempo: number;
  porcoes: number;
  images: string;
};

type Props = {
  receitas: Receitas[];
};

export default function CardList({ receitas }: Props) {
  return (
    <div className={styles.containerBody}>
      {receitas.map((item, index) => (
        <Card
          key={item.id}
          titulo={item.titulo}
          tempo={item.tempo}
          porcoes={item.porcoes}
          images={item.images}
        />
      ))}
    </div>
  );
}
