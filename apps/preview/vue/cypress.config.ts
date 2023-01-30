import { defineConfig } from "cypress";

const singleFile = process.env.SPEC ? `${process.env.SPEC}/` : "";
export default defineConfig({
  env: {
    framework: "vue",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    specPattern: `src/components/sfui/tests/components/${singleFile}**/*.{cy,spec}.{js,ts,jsx,tsx}`,
    fixturesFolder: "src/components/sfui/tests/fixtures",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
