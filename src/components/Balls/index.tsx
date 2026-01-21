import { BallItem } from "./components/BallItem";
import styles from "./balls.module.scss";

interface Props {
  count: number;
  color: string;
}

export function Balls({ count, color }: Props) {
  return (
    <div className={styles.balls}>
      {Array.from({ length: count }).map((_, index) => (
        <BallItem key={index} color={color} />
      ))}
    </div>
  );
}
