import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, colors, vars } from "~/styles";

export const badge = recipe({
  base: [
    {
      border: `1px solid`,
      display: "inline-flex",
      alignItems: "center",
      flexDirection: "row",
      height: 20,
      verticalAlign: "middle",
      color: colors.sand12,
    },
    sprinkles({ fontSize: 12, fontWeight: "regular" }),
  ],
  variants: {
    type: {
      invisible: {
        border: "none",
        selectors: {
          "&:where(a, button, .interactive):hover": {
            backgroundColor: colors.sand3,
            cursor: "pointer",
          },
        },
      },
      outline: {
        backgroundColor: colors.panel,
        borderColor: colors.sand4,
        color: colors.lime12,
        selectors: {
          "&:where(a, button, .interactive):hover": {
            borderColor: colors.sand7,
            cursor: "pointer",
            boxShadow:
              "0px 1px 5px rgba(0, 0, 0, 0.04), 0px 4px 8px -8px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      outlineColor: {
        backgroundColor: colors.panel,
        borderColor: colors.sand4,
        color: colors.lime11,
        selectors: {
          "&:where(a, button, .interactive):hover": {
            borderColor: colors.sand7,
            cursor: "pointer",
            boxShadow:
              "0px 1px 5px rgba(0, 0, 0, 0.04), 0px 4px 8px -8px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      fill: {
        border: "none",
        backgroundColor: colors.lime2,
        color: colors.lime11,
        selectors: {
          "&:where(a, button):hover": {
            backgroundColor: colors.lime3,
          },
        },
      },
      // Kind of a special case, should perhaps be something else than a badge 👇
      solid: [
        sprinkles({
          fontFamily: "semi-mono",
        }),
        {
          border: "none",
          backgroundColor: colors.lime11,
          color: colors.panel,
          fontSize: 9,
          padding: "2px 2px",
          lineHeight: 1,
          height: 12,
          selectors: {
            "&:where(a, button):hover": {
              backgroundColor: colors.lime12,
            },
          },
        },
      ],
      disabled: {
        border: "none",
        backgroundColor: colors.sand2,
        color: colors.sand10,
      },
      attention: {
        backgroundColor: colors.orange3,
        color: colors.orange10,
        border: "none",
      },
      note: {
        backgroundColor: colors.yellow2,
        color: colors.yellow11,
        border: "none",
        selectors: {
          "&:where(a, button):hover": {
            background: colors.yellow3,
            cursor: "pointer",
            boxShadow:
              "0px 1px 5px rgba(0, 0, 0, 0.04), 0px 4px 8px -8px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      warning: {
        backgroundColor: colors.tomato3,
        color: colors.tomato11,
        border: "none",
      },
    },
    context: {
      text: { fontFamily: vars.font.family.default },
      code: {
        fontFamily: vars.font.family.mono,
      },
    },
    icon: {
      true: [
        { gap: "2px" },
        sprinkles({ paddingInlineStart: 2, paddingInlineEnd: 6 }),
      ],
      false: [{ gap: "4px" }, sprinkles({ px: 6 })],
    },
    shape: {
      rounded: {
        borderRadius: 6,
      },
      mini: {
        borderRadius: 3,
      },
      pill: {
        borderRadius: 999,
      },
    },
  },
  defaultVariants: {
    type: "outline",
    icon: false,
    shape: "rounded",
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
