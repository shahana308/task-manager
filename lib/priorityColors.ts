import { Priority } from "./types";

export const priorityColorMap: Record<Priority | "default", {
  bg: string;
  text: string;
  border: string;
}> = {
  low: {
    bg: "bg-pastel-green-light",
    text: "text-pastel-green-dark",
    border: "border-pastel-green",
  },
  medium: {
    bg: "bg-pastel-yellow-light",
    text: "text-pastel-yellow-dark",
    border: "border-pastel-yellow",
  },
  high: {
    bg: "bg-pastel-red-light",
    text: "text-pastel-red-dark",
    border: "border-pastel-red",
  },
  default: {
    bg: "bg-pastel-gray-light",
    text: "text-pastel-gray-dark",
    border: "border-pastel-gray",
  },
};