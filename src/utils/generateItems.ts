import type { Item } from "../shared/types";
import { TEXT_WORDS } from "../shared/constants";
import { createItem } from "./createItem";

export function generateNumber(length: number = 4): number {
  const digit = Math.floor(Math.random() * 9) + 1;
  return Number(String(digit).repeat(length));
}

export function generateContent(): string {
  const label = generateNumber();

  const firstLine = `Text ${TEXT_WORDS.slice(0, 2).join(" ")}`;
  const secondLine = TEXT_WORDS.join(" ");

  return `${label}\n${firstLine}\n${secondLine}`;
}

export function generateItems(count: number): Item[] {
  return Array.from({ length: count }, () => createItem());
}
