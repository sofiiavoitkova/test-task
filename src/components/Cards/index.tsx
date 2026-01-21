import { CardItem } from "./components/CardItem";
import type { Item } from "../../shared/types";
import styles from "./cards.module.scss";

interface Props {
  items: Item[];
}

export function Cards({ items }: Props) {
  return (
    <div className={styles.card}>
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}
