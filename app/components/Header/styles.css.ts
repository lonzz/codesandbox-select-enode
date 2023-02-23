import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { sprinkles, colors, vars } from "~/styles";

export const headerHeight = vars.space[56];

export const root = style({
  backgroundColor: colors.panel,
  display: "flex",
  flexWrap: "wrap",
  "@media": {
    "(min-width: 780px)": {
      paddingInline: vars.space[20],
      borderBlockEnd: `1px solid ${colors.sand6}`,
      height: headerHeight,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "sticky",
      top: 0,
      zIndex: 3,
    },
  },
});

export const logo = style([
  sprinkles({
    fontFamily: "inktrap",
  }),
  {
    order: 1,
    flexGrow: 1,
    padding: vars.space[16],
    display: "flex",
    alignItems: "center",
    gap: 8 + 2,
    color: colors.lime11,
    transition: vars.transition.default,
    transitionProperty: "color",
    ":hover": {
      color: colors.lime12,
    },
    "@media": {
      "(min-width: 780px)": {
        flexGrow: 0,
        padding: 0,
      },
    },
  },
]);

export const nav = style({
  width: "100%",
  order: 3,
  borderBlockStart: `1px solid ${colors.sand6}`,
  "@media": {
    "(min-width: 780px)": {
      order: 2,
      width: "auto",
      marginInlineStart: vars.space[56],
      borderBlockStart: "none",
      marginInlineEnd: "auto",
    },
  },
});

export const navList = style({
  display: "flex",
  alignItems: "center",
  borderBlockEnd: `1px solid ${colors.sand6}`,
  "@media": {
    "(min-width: 780px)": {
      borderBlockEnd: "none",
      gap: vars.space[32],
    },
  },
});

export const navListItem = style({
  textAlign: "center",
  flex: 1,
  selectors: {
    "&:not(:first-child)": {
      borderInlineStart: `1px solid ${colors.sand6}`,
      "@media": {
        "(min-width: 780px)": {
          borderInlineStart: "none",
        },
      },
    },
  },
});

export const navLinkItem = style({
  color: colors.sand11,
  paddingBlock: vars.space[8],
  paddingInline: vars.space[6],
  position: "relative",
  display: "block",
  /* flexDirection: "row",
  alignItems: "center",
  gap: vars.space[4], */
  background: "transparent",
  transition: `background-color ${vars.transition.default}`,
  "::before": {
    content: "",
    backgroundColor: colors.lime11,
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: -1,
    left: 0,
    display: "none",
  },
  ":hover": {
    color: colors.sand12,
    backgroundColor: colors.sand3,
  },
  selectors: {
    "&:hover::before": {
      opacity: 1,
    },
    "&.active": {
      color: colors.sand12,
    },
    "&.active::before": {
      display: "block",
    },
  },
  "@media": {
    "(min-width: 780px)": {
      borderRadius: 6,
      paddingInline: vars.space[6],
      paddingBlock: vars.space[2],
      "::before": {
        bottom: calc("50%").subtract(calc(headerHeight).divide(2)).toString(),
        /* For some reason there's half px rendering..  */
        transform: "translateY(calc(-50% + 1.5px))",
      },
      "::after": {
        content: "",
        width: "100%",
        height: "100%",
        minHeight: headerHeight,
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
      },
    },
  },
});

export const aside = style({
  order: 2,
  paddingBlock: 10,
  paddingInlineEnd: 16,
  marginInlineStart: "auto",
  "@media": {
    "(min-width: 780px)": {
      order: 3,
      padding: 0,
    },
  },
});

export const secondaryCTA = style({
  display: "none",
  "@media": {
    "(min-width: 780px)": {
      display: "inline-block",
    },
  },
});
