import type { Item } from "@shared/types";
import { TEXT_WORDS, LOREM_WORDS } from "@shared/constants";
import { createItem } from "@utils/createItem";

export function generateNumber(length: number = 4): number {
  const digit = Math.floor(Math.random() * 9) + 1;
  return Number(String(digit).repeat(length));
}

export function generateContent(): string {
  const label = generateNumber();

  const firstLine = `Tekst ${TEXT_WORDS.slice(0, 2).join(" ")}`;
  const secondLine = TEXT_WORDS.join(" ");

  return `${label}\n${firstLine}\n${secondLine}`;
}

export function generateItems(count: number): Item[] {
  return Array.from({ length: count }, () => createItem());
}

function randomWords(count: number): string {
  return Array.from(
    { length: count },
    () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)],
  ).join(" ");
}

export function generateRandomContent(): string {
  const label = generateNumber();

  const firstLine = randomWords(3);
  const secondLine = randomWords(3);

  return `${label}\n${firstLine}\n${secondLine}`;
}
