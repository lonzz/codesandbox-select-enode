/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    unstable_vanillaExtract: true,
  },
  ignoredRouteFiles: ["*.css.ts"],
  sourcemap: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};