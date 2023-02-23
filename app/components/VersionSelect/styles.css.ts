import { style, styleVariants } from "@vanilla-extract/css";
import { colors, sprinkles, vars } from "~/styles";

export const root = style({
  position: "relative",
});

export const summary = style([
  sprinkles({ py: 6, px: 8, fontWeight: "regularPlusPlus" }),
  {
    color: colors.lime11,
    fontSize: vars.size[14],
    lineHeight: 1,
    backgroundColor: colors.panel,
    border: `1px solid ${colors.sand6}`,
    borderRadius: vars.space[8],
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: vars.space[2],
    cursor: "pointer",
    boxShadow: vars.shadow[1],
    transition: vars.transition.default,
    transitionProperty: "all",
    ":hover": {
      borderColor: colors.sand7,
      boxShadow:
        // TODO: This is similar to the shadow for Badge interactivity indication, but both should be moved to vars.shadows
        "0px 1px 3px rgba(0, 0, 0, 0.02), 0px 4px 8px -8px rgba(0, 0, 0, 0.04)",
    },
  },
]);

export const chevron = style([
  sprinkles({ marginInlineStart: "auto", color: "sand9" }),
  {
    selectors: {
      [`${root}[open] &`]: {
        transform: "rotate(180deg)",
      },
    },
  },
]);

export const content = style({
  backgroundColor: colors.panel,
  border: `1px solid ${colors.sand6}`,
  borderRadius: vars.space[8],
  boxShadow: vars.shadow[3],
  marginBlockStart: vars.space[6],
  width: "100%",
  position: "absolute",
  top: "100%",
  left: 0,
});

export const group = style([
  sprinkles({ py: 6, px: 6 }),
  {
    selectors: {
      "&:not(:last-child)": {
        borderBlockEnd: `1px solid ${colors.sand6}`,
      },
    },
  },
]);

export const label = style([
  sprinkles({ py: 4, color: "sand11", fontWeight: "regularPlusPlus" }),
  {
    fontSize: "0.75rem",
    paddingInline: 5,
  },
]);

const baseItem = style([
  sprinkles({ py: 6, px: 4, fontWeight: "regularPlus" }),
  {
    fontSize: vars.size[14],
    lineHeight: 1,
    borderRadius: vars.space[4],
    display: "flex",
    alignItems: "center",
    gap: vars.space[2],
    cursor: "pointer",
    ":hover": {
      backgroundColor: colors.sand2,
    },
    selectors: {
      '&[aria-current="page"]': {
        backgroundColor: colors.lime3,
      },
    },
  },
]);

export const item = styleVariants({
  default: [baseItem],
  highlighted: [baseItem, { color: colors.lime11 }],
});
