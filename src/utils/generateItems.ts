import type { Item } from "../shared/types";
import { TEXT_WORDS } from "../shared/constants";
import { createItem } from "./createItem";

export function generateLabel(index: number, length: number): number {
  const digit = (index % 9) + 1;
  return Number(String(digit).repeat(length));
}

export function generateText(): string {
  const firstLine = `Text ${TEXT_WORDS.slice(0, 2).join(" ")}`;
  const secondLine = TEXT_WORDS.join(" ");
  return firstLine + "\n" + secondLine;
}

export function generateItems(count: number): Item[] {
  return Array.from({ length: count }, (_, i) => createItem(i));
}
