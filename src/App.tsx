import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { Balls } from "./components/Balls";
import { generateItems } from "./utils/generateItems";
import type { Item } from "./shared/types";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(generateItems(1000));
  }, []);

  return (
    <>
      <Cards items={items} />
      <Balls count={items.length} color="#ff6b6b" />
    </>
  );
}

export default App;
