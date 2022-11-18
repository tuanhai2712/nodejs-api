import express from "express";
import router from "./router/index.js";
export const app = express();
app.use(express.json());
router();

app.listen(5000, () => console.log("auth running"));
