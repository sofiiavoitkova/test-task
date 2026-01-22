import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { Balls } from "./components/Balls";
import { Button } from "./components/Button";
import { generateItems } from "./utils/generateItems";
import { createItem } from "./utils/createItem";
import type { Item } from "./shared/types";
import styles from "./app.module.scss";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(generateItems(1000));
  }, []);

  const handleAddItem = () => {
    setItems((prev) => [...prev, createItem(prev.length)]);
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
          <Balls count={items.length} color="#ff6b6b" />
        </div>
      </div>
    </>
  );
}

export default App;
