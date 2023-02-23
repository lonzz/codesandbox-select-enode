import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { BadgeVariants } from "./styles.css";
import * as styles from "./styles.css";

interface BadgeProps extends ComponentPropsWithRef<"span"> {
  variants?: BadgeVariants;
  asChild?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { asChild, variants, ...props },
  ref
) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      {...props}
      className={clsx(styles.badge(variants), props.className)}
      ref={ref}
    />
  );
});

export { Badge };
