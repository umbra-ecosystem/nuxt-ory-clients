import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input:
    "https://raw.githubusercontent.com/ory/sdk/refs/heads/master/spec/kratos/v1.3.8.json",
  output: "src",
  plugins: ["@hey-api/client-nuxt"],
});
