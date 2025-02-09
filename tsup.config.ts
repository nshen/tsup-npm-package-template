import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
  sourcemap: false,
  minify: true,
  target: "esnext",
  outDir: "dist",
})
