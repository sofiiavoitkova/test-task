import { memo } from "react";
import { BallItem } from "@components/BallItem";
import styles from "./balls.module.scss";

interface Props {
  count: number;
}

function Balls({ count }: Props) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, index) => (
        <BallItem key={index} />
      ))}
    </div>
  );
}

export default memo(Balls);
