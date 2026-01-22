import styles from "./ballItem.module.scss";

interface Props {
  color: string;
}

export function BallItem({ color }: Props) {
  return (
    <div className={styles.ball} style={{ backgroundColor: color }}>
      {" "}
    </div>
  );
}
