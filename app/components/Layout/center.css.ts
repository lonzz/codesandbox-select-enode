import { style } from "@vanilla-extract/css";
import { vars } from "~/styles";

export const root = style({
  padding: vars.space[16],
  "@media": {
    "(min-width: 560px)": {
      padding: vars.space[32],
    },
    "(min-width: 780px)": {
      padding: vars.space[56],
      maxWidth: "calc(720px + 112px)",
      margin: "0 auto",
    },
  },
});

/* 

.c-layout {
  max-width: calc(720px + 112px);
  margin: 0 auto;
  padding: 56px;
}

.c-layout div {
  height: 1000px;
  background-color: red;
}

@media (max-width: 780px) {
  .c-layout {
    padding: 32px
  }
}

@media (max-width: 560px) {
  .c-layout {
    padding: 16px
  }
} */
