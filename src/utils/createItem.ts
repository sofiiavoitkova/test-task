import type { Item } from "../shared/types";
import { COLORS } from "../shared/constants";
import { generateLabel, generateText } from "./generateItems";

export function createItem(index: number): Item {
  return {
    id: index + 1,
    label: generateLabel(index, 4),
    text: generateText(),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}
