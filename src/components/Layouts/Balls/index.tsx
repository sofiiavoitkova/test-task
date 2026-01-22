import { memo } from "react";
import { BallItem } from "../../BallItem";
import styles from "./balls.module.scss";

interface Props {
  count: number;
  color: string;
}

function Balls({ count, color }: Props) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, index) => (
        <BallItem key={index} color={color} />
      ))}
    </div>
  );
}

export default memo(Balls);
