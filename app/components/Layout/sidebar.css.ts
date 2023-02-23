import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { headerHeight } from "../Header/styles.css";
import { sprinkles, colors, vars } from "~/styles";

export const root = style({
  "@media": {
    "(min-width: 780px)": {
      display: "grid",
      gridTemplateColumns: "256px 1fr",
    },
  },
});
export const sidebar = style([
  /* sprinkles({ fontSize: 14 }), */
  {
    paddingInline: vars.space[12],
    paddingBlock: `${vars.space[16]} ${vars.space[8]}`,
    position: "sticky",
    top: 0,
    zIndex: 1,
    "@media": {
      "(min-width: 780px)": {
        paddingInline: 0,
        paddingBlock: 0,
        position: "relative",
      },
    },
  },
]);

export const navigation = style([
  {
    backgroundColor: colors.panel,
    outline: `1px solid ${colors.sandA4}`,
    boxShadow: vars.shadow[3],
    borderRadius: 6,
    paddingInline: vars.space[12],
    paddingBlock: vars.space[12],
    width: calc("100%").subtract(calc(vars.space[12]).multiply(2)).toString(),
    height: "calc(100vh - 172px)",
    position: "absolute",
    top: "100%",
    left: vars.space[12],
    display: "none",
    overflow: "auto",
    selectors: {
      "&.open": {
        display: "block",
      },
    },
    "@supports": {
      "(height: 100dvh)": {
        height: "calc(100dvh - 172px)",
        "@media": {
          "(min-width: 780px)": {
            height: "100%",
            maxHeight: `calc(100dvh - ${headerHeight})`,
          },
        },
      },
    },
    "@media": {
      "(min-width: 780px)": {
        outline: "none",
        boxShadow: "none",
        borderRadius: 0,
        width: "100%",
        display: "block",
        paddingBlock: `${vars.space[16]}`,
        paddingInline: vars.space[12],
        position: "sticky",
        top: vars.space[56],
        height: "100%",
        maxHeight: `calc(100vh - ${headerHeight})`,
        overflowY: "auto",
        overflowX: "hidden",
        selectors: {
          "&.open": {
            display: "block",
            boxShadow: "none",
            outline: "none",
            left: vars.space[16],
            paddingInline: vars.space[0],
            paddingBlock: vars.space[16],
            width: "100%",
          },
        },
      },
    },
  },
]);

export const main = style({
  minWidth: 0,
  "@media": {
    "(min-width: 780px)": {
      borderInlineStart: `1px solid ${colors.sand6}`,
    },
  },
});

export const button = style([
  sprinkles({ py: 6, paddingInlineStart: 12, paddingInlineEnd: 8 }),
  {
    textAlign: "left",
    color: colors.sand11,
    backgroundColor: colors.panel,
    outline: `1px solid ${colors.sand6}`,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    "@media": {
      "(min-width: 780px)": {
        display: "none",
      },
    },
  },
]);
