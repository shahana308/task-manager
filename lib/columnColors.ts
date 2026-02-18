export const columnColorMap: Record<
  string | "default",
  {
    bg: string;
    dot: string;
    border: string;
  }
> = {
  todo: {
    bg: "bg-pastel-yellow-light",
    dot: "bg-pastel-yellow-dark",
    border: "border-pastel-yellow",
  },

  "in-progress": {
    bg: "bg-pastel-blue-light",
    dot: "bg-pastel-blue-dark",
    border: "border-pastel-blue",
  },

  done: {
    bg: "bg-pastel-green-light",
    dot: "bg-pastel-green-dark",
    border: "border-pastel-green",
  },

  default: {
    bg: "bg-pastel-gray-light",
    dot: "bg-pastel-gray-dark",
    border: "border-pastel-gray",
  },
};
