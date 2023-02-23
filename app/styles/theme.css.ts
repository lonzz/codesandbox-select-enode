import {
  sand,
  sandDark,
  sandA,
  sandDarkA,
  lime,
  limeDark,
  limeA,
  limeDarkA,
  tomato,
  tomatoDark,
  yellow,
  yellowDark,
  orange,
  orangeDark,
  crimson,
  crimsonDark,
} from "@radix-ui/colors";
import {
  assignVars,
  createTheme,
  createThemeContract,
  style,
} from "@vanilla-extract/css";

export const colors = createThemeContract({
  ...sand,
  ...sandA,
  ...lime,
  ...limeA,
  ...tomato,
  ...yellow,
  ...orange,
  ...crimson,
  panel: null,
});

const [theme, vars] = createTheme({
  font: {
    family: {
      default:
        "Whyte, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      inktrap:
        "WhyteInktrap, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      mono: "WhyteMono, ui-monospace, monospace",
      "semi-mono": "WhyteSemiMono, ui-monospace, monospace",
    },
    weight: {
      regular: "380",
      regularPlus: "420",
      regularPlusPlus: "440",
      medium: "480",
    },
  },
  shadow: {
    1: "none",
    2: `0px 1px 5px ${colors.sandA3}, 0px 4px 8px -8px ${colors.sandA4}`,
    3: `0px 1px 5px ${colors.sandA2}, 0px 4px 16px -8px ${colors.sandA5}`,
    4: `0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 5px rgba(0, 0, 0, 0.04), 0px 4px 80px -8px rgba(0, 0, 0, 0.3);`,
  },
  transition: {
    default: "0.175s ease-in-out",
  },
  space: {
    auto: "auto",
    0: "0rem",
    2: ".125rem",
    4: ".25rem",
    6: ".375rem",
    8: ".5rem",
    10: ".625rem",
    12: ".75rem",
    14: ".875rem",
    16: "1rem",
    20: "1.25rem",
    24: "1.5rem",
    28: "1.75rem",
    32: "2rem",
    40: "2.5rem",
    48: "3rem",
    56: "3.5rem",
    64: "4rem",
  },
  size: {
    6: ".375rem",
    12: "0.75rem",
    14: "0.875rem",
    16: "1rem",
    20: "1.25rem",
    24: "1.5rem",
    30: "1.875rem",
  },
});

export const colorTheme = style({
  vars: assignVars(colors, {
    ...sand,
    ...sandA,
    ...lime,
    ...limeA,
    ...tomato,
    ...yellow,
    ...orange,
    ...crimson,
    panel: "#ffffff",
  }),
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(colors, {
        ...sandDark,
        ...sandDarkA,
        ...limeDark,
        ...limeDarkA,
        ...tomatoDark,
        ...yellowDark,
        ...orangeDark,
        ...crimsonDark,
        panel: sandDark.sand1,
      }),
    },
  },
});

export { theme, vars };
