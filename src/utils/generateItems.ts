import type { Item } from "../shared/types";
import { COLORS } from "../shared/constants";

function generateLabel(index: number, length: number): number {
  const digit = (index % 9) + 1;
  return Number(String(digit).repeat(length));
}

function generateText(): string {
  const words = ["tekst", "tekst", "tekst"];
  const firstLine = "Tekst " + words.join(" ");
  const secondLine = words.join(" ");
  return firstLine + "\n" + secondLine;
}

export function generateItems(count: number): Item[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    label: generateLabel(i, 4),
    text: generateText(),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}
