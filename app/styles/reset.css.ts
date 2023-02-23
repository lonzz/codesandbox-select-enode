import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("h1, h2, h3, h4, h5, p, figure, blockquote, ul, ol, dl, dd", {
  margin: 0,
  fontWeight: "inherit",
});

globalStyle("h1, h2, h3, h4, h5", {
  fontSize: "1em",
});

globalStyle("em", {
  fontStyle: "normal",
});

globalStyle("ul, ol", {
  listStyle: "none",
  padding: 0,
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("input, button, textarea, select", {
  fontFamily: "inherit",
  fontFeatureSettings: "inherit",
});

globalStyle("button", {
  fontSize: "1em",
  color: "inherit",
  background: "none",
  border: "none",
  padding: 0,
});

globalStyle("address", {
  fontStyle: "normal",
});

globalStyle("pre", {
  margin: 0,
});

globalStyle("details > summary", {
  listStyle: "none",
});

globalStyle("summary::-webkit-details-marker", {
  display: "none",
});

globalStyle("th, td", {
  padding: 0,
});

globalStyle("dialog:not([open])", {
  display: "none",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

globalStyle("fieldset", {
  padding: 0,
  margin: 0,
  border: "none",
  minWidth: 0,
});
globalStyle("legend", {
  padding: 0,
});

globalStyle("[hidden]", {
  display: "none !important",
});
