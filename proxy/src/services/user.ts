import { Express } from "express";
import axios from "axios";

const baseUrl = "http://nginx/api";

const initUserService = (app: Express) => {
  app.get("/api/hello", (_, res) => {
    axios.get(`${baseUrl}/hello`).then((onfulfilled) => {
      res.send(onfulfilled.data);
    });
  });

  app.post("/api/.user/inscription", (req, res) => {
    axios
      .post(
        `${baseUrl}/inscription/`,
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone_number: req.body.phone_number,
          nationality: req.body.nationality,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error);
      });
  });

  app.post("/api/.user/validate-user/:id", (req, res) => {
    axios
      .post(
        `${baseUrl}/inscription/validate-user/${req.params.id}`,
        {},
        {
          headers: {
            Authorization: req.header("Authorization"),
          },
        }
      )
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error);
      });
  });

  app.post("/api/.user/login", (req, res) => {
    axios
      .post(
        `${baseUrl}/login_check`,
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
      .then((response) => {
        res.send(response.data);
      })
      .catch(() => {
        res.send("Invalid credentials");
      });
  });

  app.get("/api/.user/user", (req, res) => {
    axios
      .get(`${baseUrl}/user`, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  });

  app.get("/api/.user/users", (req, res) => {
    axios
      .get(`${baseUrl}/users`, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  });

  app.get("/api/.user/future-users", (req, res) => {
    axios
      .get(`${baseUrl}/future-users`, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  });

  app.get("/api/.user/admin", (req, res) => {
    axios
      .get(`${baseUrl}/admin`, {
        headers: {
          Authorization: req.header("Authorization"),
        },
      })
      .then((response) => {
        res.send(response.data);
      });
  });

  app.post("/api/.user/checkRole", (req, res) => {
    axios
      .post(
        `${baseUrl}/user/check_role`,
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
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.send(error);
      });
  });
};

export default initUserService;
