import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/main.js",
    output: {
      file: "dist/movablePoints.min.js",
      format: "iife",
      name: "movablePoints",
      plugins: [terser()],
    },
  },
  {
    input: "src/main.js",
    output: {
      file: "dist/movablePoints.esm.js",
      format: "esm",
    },
  },
];
