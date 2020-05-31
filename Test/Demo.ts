import { Application } from "../Src/Application.ts";
import { oak } from "../Src/Oak.ts";


const app: Application = oak.getApp();

app.test();
console.log("just test, ", app.test());
