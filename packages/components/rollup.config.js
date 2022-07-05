import ts from "rollup-plugin-typescript2";

const config = {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [ts()],
  preserveModules: true,
  external: ["react"],
};

export default config;
