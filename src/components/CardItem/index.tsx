import { memo } from "react";
import cls from "classnames";
import type { Item } from "@shared/types";
import styles from "./cardItem.module.scss";

interface Props {
  item: Item;
}

function CardItem({ item }: Props) {
  return (
    <div className={cls(styles.card, styles[item.color])}>
      <div className={styles.text}>{item.text}</div>
    </div>
  );
}

export default memo(CardItem);
