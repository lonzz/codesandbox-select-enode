import type { LinksFunction, MetaFunction } from "@remix-run/node";
import clsx from "clsx";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import fontFile from "~/styles/fonts/ABCWhyteVariable.woff2";
import * as styles from "~/styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "💃 Select Animation Party 🕺",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: cssBundleHref || "" },
    {
      rel: "preload",
      href: fontFile,
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];
};

export default function App() {
  const { pathname } = useLocation();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={clsx(styles.body, {
          [styles.dashboard]: pathname.startsWith("/dashboard"),
        })}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
