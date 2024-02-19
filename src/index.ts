import { greetings } from "@/common/utils";

export function addition(a: number, b: number): number {
  return a + b;
}

greetings();
console.log(addition(2, 3));
