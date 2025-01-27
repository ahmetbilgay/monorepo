import { styled } from "~/stitches.config";

export const Text = styled("p", {
  color: "$gray9",

  variants: {
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
    },
    lineHeight: {
      1: { lineHeight: "16px" },
      2: { lineHeight: "20px" },
      3: { lineHeight: "23px" },
    },
  },
});
