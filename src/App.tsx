import { useEffect, useState } from "react";
import type { Item } from "./shared/types";
import { Cards } from "./components/Cards";
import { Balls } from "./components/Balls";
import { generateDisplayNumber, generateCardText } from "./utils/generateItems";

import "./App.css";

const COLORS = ["#2ecc71", "#3498db", "#1abc9c", "#16a085"];

function generateItems(count: number): Item[] {
  const items: Item[] = [];

  for (let i = 0; i < count; i++) {
    items.push({
      id: generateDisplayNumber(i),
      text: generateCardText(),
      color: COLORS[i % COLORS.length],
    });
  }

  return items;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(generateItems(1000));
  });

  return (
    <>
      <Cards items={items} />
      <Balls count={items.length} color="#ff6b6b" />
    </>
  );
}

export default App;
