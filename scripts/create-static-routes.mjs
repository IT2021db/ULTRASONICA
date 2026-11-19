import { cp, mkdir } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = "dist";
const routes = ["services", "projects", "contact", "privacy-policy"];

for (const route of routes) {
  const routeDirectory = join(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await cp(join(outputDirectory, "index.html"), join(routeDirectory, "index.html"));
}

