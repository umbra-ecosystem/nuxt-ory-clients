import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input:
    "https://raw.githubusercontent.com/ory/sdk/refs/heads/master/spec/hydra/v2.3.0.json",
  output: "src",
  plugins: ["@hey-api/client-nuxt"],
});
