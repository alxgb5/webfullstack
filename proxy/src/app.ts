import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/api/hello", (_, res) => {
  axios.get("http://nginx/api/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});

app.post("/api/.user/login", (req, res) => {
  axios
    .post(
      "http://nginx/api/login_check",
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
});

app.get("/api/.user/user", (req, res) => {
  axios
    .get("http://nginx/api/user", {
      headers: {
        Authorization: req.header("Authorization"),
      },
    })
    .then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
});

app.get("/api/.user/admin", (req, res) => {
  axios
    .get("http://nginx/api/admin", {
      headers: {
        Authorization: req.header("Authorization"),
      },
    })
    .then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
});

app.post("/api/.user/checkRole", (req, res) => {
  axios
    .post(
      "http://nginx/api/user/check_role",
      {
        role: req.body.role,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: req.header("Authorization"),
        },
      }
    )
    .then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
