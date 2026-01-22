import { v4 as uuidv4 } from "uuid";
import type { Item } from "../shared/types";
import { COLORS } from "../shared/constants";
import { generateContent } from "./generateItems";

export function createItem(): Item {
  return {
    id: uuidv4(),
    text: generateContent(),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}
