import {
  createVar,
  globalStyle,
  style,
  styleVariants,
} from "@vanilla-extract/css";

export const icon = style({});

const strokeWidth = createVar();
export const weight = styleVariants({
  1: { vars: { [strokeWidth]: "1" } },
  1.25: { vars: { [strokeWidth]: "1.25" } },
  1.5: { vars: { [strokeWidth]: "1.5" } },
});

globalStyle(`${icon} > *`, {
  strokeWidth: strokeWidth,
});
