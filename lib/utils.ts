import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imageUrl(url: string) {
  return url.startsWith("http")
    ? url
    : process.env.NEXT_PUBLIC_BACKEND_SERVER_URL + "/api/v1/" + url;
}
