import { useEffect, useState } from "react";
import Cards from "./components/Layouts/Cards";
import Balls from "./components/Layouts/Balls";
import Button from "./components/Button";
import { generateItems } from "./utils/generateItems";
import { createItem } from "./utils/createItem";
import { updateRandomItem } from "./utils/updateItem";
import type { Item } from "./shared/types";
import { BALL_COLOR } from "./shared/constants";
import styles from "./app.module.scss";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(generateItems(30));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(updateRandomItem);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleAddItem = () => {
    setItems((prev) => [...prev, createItem()]);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Cards items={items} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.button}>
            <Button onClick={handleAddItem} />
          </div>
          <Balls count={items.length} color={BALL_COLOR} />
        </div>
      </div>
    </>
  );
}

export default App;
