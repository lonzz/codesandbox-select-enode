import type { ReactElement, ReactNode } from "react";
import { Children, cloneElement, isValidElement } from "react";
import cx from "clsx";
import type { Sprinkles } from "~/styles";
import { sprinkles } from "~/styles";

interface VStackProps {
  children: ReactNode;
  spacing: Sprinkles["mb"];
  className?: string;
}

function VStack(props: VStackProps) {
  const children = Children.toArray(props.children).filter((child) =>
    isValidElement(child)
  ) as ReactElement[];

  return (
    <>
      {children.map((child, index) => {
        const className = sprinkles({ mb: props.spacing });
        const lastChild = index + 1 === children.length;

        if (lastChild) {
          if (props.className) {
            return cloneElement(child, {
              className: cx(props.className, child.props.className),
            });
          }
          return child;
        }

        return cloneElement(child, {
          className: cx(className, child.props.className),
        });
      })}
    </>
  );
}

export { VStack };
