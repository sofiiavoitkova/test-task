import CardItem from "@components/CardItem";
import type { Item } from "@shared/types";
import styles from "./cards.module.scss";

interface Props {
  items: Item[];
}

export default function Cards({ items }: Props) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}
