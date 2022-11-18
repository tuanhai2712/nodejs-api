import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = () => {
  fs.readdirSync(__dirname).forEach(function (file) {
    if (file === "index.js") return;
    import("./" + `${file}/index.js`);
  });
};

export default router;
