import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "@remix-run/react";
import clsx from "clsx";
import * as styles from "./sidebar.css";
import { Icon } from "~/components/Icon";

function Sidebar(props: { children: ReactNode }) {
  const { key: locationKey } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [locationKey]);

  return (
    <div className={styles.root}>
      <nav className={styles.sidebar}>
        <button
          className={styles.button}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          Menu
          <Icon asset="chevron" />
        </button>

        <div className={clsx(styles.navigation, open && "open")}>
          {props.children}
        </div>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export { Sidebar };
