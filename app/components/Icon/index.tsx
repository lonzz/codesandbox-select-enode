import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import type { IconNames } from "~/icons";
import iconsFile from "~/icons.svg";
import * as styles from "./styles.css";

export type IconProps = {
  asset: IconNames;
  size?: 16 | 24;
  weight?: keyof typeof styles.weight;
} & Omit<ComponentPropsWithoutRef<"svg">, "children" | "width" | "height">;

function Icon({ asset, size = 24, weight, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      aria-hidden="true"
      className={clsx(
        styles.icon,
        styles.weight[weight || size > 16 ? 1.5 : 1],
        props.className
      )}
    >
      <use xlinkHref={`${iconsFile}#${asset}`} />
    </svg>
  );
}

export { Icon };
