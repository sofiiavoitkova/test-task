import styles from "./cardItem.module.scss";
import type { Item } from "../../../../shared/types";

interface Props {
  item: Item;
}

export function CardItem({ item }: Props) {
  const isWhite = item.color === "#ffffffff";

  return (
    <div
      className={`${styles.card} ${isWhite ? styles.white : ""}`}
      style={!isWhite ? { backgroundColor: item.color } : undefined}
    >
      <div className={styles.label}>{item.label}</div>
      <div className={styles.text}>{item.text}</div>
    </div>
  );
}
