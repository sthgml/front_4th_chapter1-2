import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import { defineConfig } from "vite";

export default mergeConfig(
  defineConfig({
    esbuild: {
      // 여기서 createVnode를 도입해가지구 jsx를 생성한다~
      jsxFactory: "createVNode",
    },
    optimizeDeps: {
      esbuildOptions: {
        jsx: "transform",
        jsxFactory: "createVNode",
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
    },
  }),
);
