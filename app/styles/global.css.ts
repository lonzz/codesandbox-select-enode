import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import { media } from "./layout.css";
import { colors, colorTheme, theme, vars } from "./theme.css";

import "./reset.css";

globalFontFace("Whyte", {
  src: 'url("./fonts/ABCWhyteVariable.woff2") format("woff2 supports variations"), url("./fonts/ABCWhyteVariable.woff2") format("woff2-variations")',
  fontWeight: "100 900",
  fontDisplay: "swap",
});

globalFontFace("WhyteInktrap", {
  src: 'url("./fonts/ABCWhyteInktrap-Medium.woff2") format("woff2")',
  fontWeight: 500,
  fontDisplay: "swap",
});

globalFontFace("WhyteMono", {
  src: 'url("./fonts/ABCWhyteMono-Regular.woff2") format("woff2")',
  fontWeight: 400,
  fontDisplay: "swap",
});

globalFontFace("WhyteSemiMono", {
  src: 'url("./fonts/ABCWhyteSemi-Mono-Regular.woff2") format("woff2")',
  fontWeight: 400,
  fontDisplay: "swap",
});

globalStyle(":root", {
  colorScheme: "light dark",
});

globalStyle("html", {
  fontSize: "100%",
  scrollPaddingTop: "3.5rem",
});

export const body = style([
  theme,
  colorTheme,
  {
    fontFamily: vars.font.family.default,
    fontWeight: vars.font.weight.regular,
    fontVariationSettings: `"wght" ${vars.font.weight.regular}`,
    fontFeatureSettings: `'ss02' on`,
    fontSmooth: "always",
    color: colors.sand12,
    backgroundColor: colors.panel,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    margin: 0,
  },
]);

/* Only apply new layout rules to /dashboard/* */
export const dashboard = style({
  minHeight: ["100vh", "100dvh"],
  "@media": {
    [media.large]: {
      display: "flex",
      flexDirection: "column",
    },
  },
});

globalStyle("a:not([class])", {
  textDecoration: "underline",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
  verticalAlign: "top",
});

globalStyle("::marker", {
  color: colors.sand10,
});

globalStyle("form", {
  caretColor: colors.lime11,
  accentColor: colors.lime11,
});

globalStyle(":focus", {
  outline: `3px solid ${colors.limeA4}`,
  transition: "ease-in-out 0.025s",
  transitionProperty: "outline-width",
});

globalStyle(":focus:not(:focus-visible)", {
  outline: "none",
});
