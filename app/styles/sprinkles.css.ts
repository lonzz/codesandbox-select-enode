import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { colors, vars } from "./theme.css";

const properties = defineProperties({
  properties: {
    backgroundColor: colors,
    stroke: colors,
    fontSize: vars.size,
    fontFamily: vars.font.family,
    fontVariationSettings: {
      regular: `"wght" ${vars.font.weight.regular}`,
      regularPlus: `"wght" ${vars.font.weight.regularPlus}`,
      regularPlusPlus: `"wght" ${vars.font.weight.regularPlusPlus}`,
      medium: `"wght" ${vars.font.weight.medium}`,
    },
    "font-weight": vars.font.weight,
    marginBlockStart: vars.space,
    marginInlineStart: vars.space,
    marginInlineEnd: vars.space,
    paddingBlockStart: vars.space,
    paddingBlockEnd: vars.space,
    paddingInlineStart: vars.space,
    paddingInlineEnd: vars.space,
    width: ["100%"],
    height: ["100%"],
    flexDirection: ["row", "row-reverse"],
    alignItems: ["center"],
    justifyContent: ["space-between", "space-around"],
    overflow: ["visible"],
  },
  shorthands: {
    mt: ["marginBlockStart"],
    pt: ["paddingBlockStart"],
    pb: ["paddingBlockEnd"],
    py: ["paddingBlockEnd", "paddingBlockStart"],
    px: ["paddingInlineEnd", "paddingInlineStart"],
    fontWeight: ["fontVariationSettings", "font-weight"],
    align: ["alignItems"],
    direction: ["flexDirection"],
  },
});

const layout = defineProperties({
  conditions: {
    small: {},
    medium: { "@media": "(min-width: 560px)" },
    large: { "@media": "(min-width: 780px)" },
  },
  defaultCondition: "small",
  responsiveArray: ["small", "medium", "large"],
  properties: {
    display: ["block", "grid", "flex"],
    gridTemplateColumns: {
      3: "repeat(3, 1fr)",
      1: "1fr",
    },
    gap: {
      4: vars.space[4],
      8: vars.space[8],
      12: vars.space[12],
      16: vars.space[16],
      24: vars.space[24],
    },
    marginBlockEnd: vars.space,
  },
  shorthands: {
    mb: ["marginBlockEnd"],
  },
});

const color = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:hover" },
  },
  defaultCondition: "default",
  properties: {
    color: colors,
  },
});

export const sprinkles = createSprinkles(properties, layout, color);
export type Sprinkles = Parameters<typeof sprinkles>[0];
