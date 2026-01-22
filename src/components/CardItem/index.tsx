import { memo } from "react";
import type { Item } from "../../shared/types";
import styles from "./cardItem.module.scss";

interface Props {
  item: Item;
}

function CardItem({ item }: Props) {
  const isWhite = item.color === "#ffffffff";

  return (
    <div
      className={`${styles.card} ${isWhite ? styles.white : ""}`}
      style={
        !isWhite
          ? { backgroundColor: item.color }
          : { backgroundColor: "#ffffffff" }
      }
    >
      <div className={styles.text}>{item.text}</div>
    </div>
  );
}

export default memo(CardItem);
