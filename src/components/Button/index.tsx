import styles from "./button.module.scss";

interface Props {
  onClick: () => void;
}

export function Button({ onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      Add item
    </button>
  );
}
