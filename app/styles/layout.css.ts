import { createVar, fallbackVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "./theme.css";

export const media = {
  medium: "(min-width: 560px)",
  large: "(min-width: 780px)",
};

const containerWidth = createVar();
const padding = createVar();

export const layout = {
  container: recipe({
    base: {
      maxWidth: calc(containerWidth).add(calc(padding).multiply(2)).toString(),
      "@media": {
        [media.medium]: {
          vars: { [padding]: vars.space[32] },
        },
        [media.large]: {
          vars: { [padding]: vars.space[40] },
        },
      },
    },
    variants: {
      width: {
        narrow: {
          vars: { [containerWidth]: 424 / 16 + "rem" },
        },
        wide: {
          vars: { [containerWidth]: 720 / 16 + "rem" },
        },
        full: {},
      },
      center: {
        true: {
          marginInline: "auto",
        },
      },
      padding: {
        true: {
          padding: fallbackVar(padding, vars.space[16]),
        },
      },
    },
    defaultVariants: {
      width: "wide",
      padding: true,
    },
  }),
  withSidebar: style({
    "@media": {
      [media.large]: {
        flexGrow: 1,
        display: "grid",
        gridTemplateColumns: "256px 1fr",
      },
    },
  }),
};
