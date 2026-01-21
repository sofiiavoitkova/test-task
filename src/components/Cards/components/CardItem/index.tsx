import styles from "./cardItem.module.scss";
import type { Item } from "../../../../shared/types";

interface Props {
  item: Item;
}

export function CardItem({ item }: Props) {
  return (
    <div className={styles.card} style={{ backgroundColor: item.color }}>
      <div className={styles.id}>#{item.id}</div>
      <div className={styles.text}>{item.text}</div>
    </div>
  );
}
