import { useRef } from "react";
import { Link, NavLink, useParams } from "@remix-run/react";
import clsx from "clsx";
import { Badge } from "~/components/Badge";
import { Icon } from "~/components/Icon";
import { VStack } from "~/components/VStack";
import { sprinkles } from "~/styles";
import { motion } from "framer-motion";
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
  let label = currentVersion;
  if (currentVersion === props.versions[0]) {
    label = "Latest version";
  }

  return (
    <details ref={ref} className={clsx(styles.root, props.className)}>
      <summary className={styles.summary}>
        <Icon asset="branch" size={16} weight={1.25} />
        {label}
        <Icon
          asset="chevron"
          size={16}
          weight={1.25}
          className={styles.chevron}
        />
      </summary>
      <div className={styles.content}>
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
      </div>
    </details>
  );
}

export { VersionSelect };
