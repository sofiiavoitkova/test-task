import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { Balls } from "./components/Balls";
import { generateItems } from "./utils/generateItems";
import type { Item } from "./shared/types";
import styles from "./app.module.scss";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(generateItems(1000));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Cards items={items} />
        </div>
        <div className={styles.bottom}>
          <Balls count={items.length} color="#ff6b6b" />
        </div>
      </div>
    </>
  );
}

export default App;
