import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(number: string) {
  const numberStr = String(number);
  if (numberStr.length === 11 && numberStr.startsWith('1')) {
    const countryCode = numberStr[0];
    const areaCode = numberStr.substring(1, 4);
    const part1 = numberStr.substring(4, 6);
    const part2 = numberStr.substring(6, 8);
    const part3 = numberStr.substring(8);
    return `+${countryCode} (${areaCode}) ${part1} ${part2} ${part3}`;
  } else if (numberStr.length === 10) {
    const areaCode = numberStr.substring(0, 3);
    const part1 = numberStr.substring(3, 5);
    const part2 = numberStr.substring(5, 7);
    const part3 = numberStr.substring(7);
    return `+58 (${areaCode}) ${part1} ${part2} ${part3}`;
  } else {
    return "Unrecognized number format.";
  }
}