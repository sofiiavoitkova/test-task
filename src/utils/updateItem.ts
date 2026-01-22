import type { Item } from "../shared/types";
import { COLORS } from "../shared/constants";
import { generateText } from "./generateItems";

export function updateRandomItem(items: Item[]): Item[] {
  if (items.length === 0) return items;

  const randomIndex = Math.floor(Math.random() * items.length);
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

  return items.map((item, index) => {
    if (index !== randomIndex) {
      return item;
    }

    return {
      id: item.id,
      text: generateText(),
      color: randomColor,
    };
  });
}
