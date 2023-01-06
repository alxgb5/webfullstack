import express from "express";
import bodyParser from "body-parser";
import checkToken from "./checkToken";
import initUserService from "./services/user";
import cors from "cors";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(checkToken());

app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);

initUserService(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
