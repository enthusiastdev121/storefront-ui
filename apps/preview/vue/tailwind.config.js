const vsfTypography = require("@storefront-ui/typography");
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require("@storefront-ui/tailwind-config");
const { join } = require("path");
console.log(
  join(
    __dirname,
    "..",
    "..",
    "..",
    "packages",
    "sfui",
    "frameworks",
    "vue",
    "components",
    "**",
    "*.{ts,vue}"
  )
);
module.exports = {
  presets: [tailwindConfig],
  content: [
    "./**/*.vue",
    "./**/*.ts",
    "./**/*.tsx",
    "../../../node_modules/@storefront-ui/vue/shared/**/*.ts",
    join(
      __dirname,
      "..",
      "..",
      "..",
      "packages",
      "sfui",
      "frameworks",
      "vue",
      "components",
      "**",
      "*.{ts,vue}"
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Red Hat Text, sans-serif",
      },
    },
  },
  plugins: [vsfTypography],
};
