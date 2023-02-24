import { useRef, useState } from "react";
import { Link, NavLink, useParams } from "@remix-run/react";
import clsx from "clsx";
import { Badge } from "~/components/Badge";
import { Icon } from "~/components/Icon";
import { VStack } from "~/components/VStack";
import { sprinkles } from "~/styles";
import { motion, Variant, Variants } from "framer-motion";
import * as styles from "./styles.css";

interface VersionSelectProps {
  versions: string[];
  hash?: string;
  className?: string;
}

function VersionSelect(props: VersionSelectProps) {
  const ref = useRef<HTMLDetailsElement>(null);
  const params = useParams();
  const currentVersion = params["*"] || props.versions[0];
  const [open, setOpen] = useState<boolean>(false);
  let label = currentVersion;
  if (currentVersion === props.versions[0]) {
    label = "Latest version";
  }

  // animation bits
  const contentVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-30px" },
  };

  const summaryVariants: Variants = {
    hover: {
      scale: 1,
    },
    tap: {
      scale: 0.985,
    },
  };

  const chevronVariants: Variants = {
    hover: {
      scale: [1, 1.3, 1],
      rotate: [0, 45, 0],
    },
  };

  return (
    <motion.details
      ref={ref}
      className={clsx(styles.root, props.className)}
      onToggle={(ev) => setOpen((ev.target as HTMLDetailsElement).open)}
    >
      <motion.summary
        className={styles.summary}
        whileHover={"hover"}
        whileTap={"tap"}
        variants={summaryVariants}
      >
        <Icon asset="branch" size={16} weight={1.25} />
        {label}
        <motion.span
          variants={chevronVariants}
          style={{ marginInlineStart: "auto" }}
        >
          <Icon
            asset="chevron"
            size={16}
            weight={1.25}
            className={styles.chevron}
          />
        </motion.span>
      </motion.summary>
      <motion.div
        className={styles.content}
        animate={open ? "open" : "closed"}
        variants={contentVariants}
      >
        <section
          className={styles.group}
          aria-labelledby="version-select-label"
        >
          <VStack spacing={2}>
            <p className={styles.label} id="version-select-label">
              Select version to view
            </p>
            <ul>
              <VStack spacing={2}>
                {props.versions.map((version, index) => {
                  const latest = index <= 0;
                  let to = latest
                    ? "/api/reference"
                    : `/api/reference/${version}`;
                  if (props.hash) {
                    to = `${to}#${props.hash}`;
                  }

                  return (
                    <li key={version}>
                      <NavLink
                        to={to}
                        className={styles.item.default}
                        end
                        onClick={() => ref?.current?.removeAttribute("open")}
                      >
                        <Icon asset="branch" size={16} weight={1.25} />
                        {version}
                        {latest ? (
                          <Badge
                            className={sprinkles({ marginInlineStart: "auto" })}
                            variants={{ icon: true, type: "outlineColor" }}
                          >
                            <Icon asset="sparkles" size={16} /> Latest
                          </Badge>
                        ) : null}
                      </NavLink>
                    </li>
                  );
                })}
              </VStack>
            </ul>
          </VStack>
        </section>
        <div className={styles.group}>
          <Link
            to="/api/reference#versioning"
            className={styles.item.highlighted}
            onClick={() => ref?.current?.removeAttribute("open")}
          >
            <Icon asset="information" size={16} weight={1.25} />
            About API versions
          </Link>
        </div>
      </motion.div>
    </motion.details>
  );
}

export { VersionSelect };
