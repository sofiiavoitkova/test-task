import type { Item } from "../shared/types";
import { COLORS } from "../shared/constants";

function generateNumbers(digit: number, length: number = 4) {
  return Number(String(digit).repeat(length));
}

export function generateDisplayNumber(index: number): number {
  const digit = (index % 9) + 1;
  return generateNumbers(digit);
}

export function generateCardText(): string {
  const words = ["tekst", "tekst", "tekst"];
  const firstLine = "Tekst " + words.join(" ");
  const secondLine = words.join(" ");
  return firstLine + "\n" + secondLine;
}

export function generateItems(count: number): Item[] {
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
