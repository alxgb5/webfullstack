import { Express } from "express";
import axios from "axios";

const baseUrl = "http://car:5000/api/cars";

const initCarService = (app: Express) => {
  app.get("/api/.car/cars", (_, res) => {
    axios.get(`${baseUrl}/`).then((response) => {
      res.send(response.data);
    });
  });

  app.get("/api/.car/cars/:id", (req, res) => {
    axios.get(`${baseUrl}/${req.params.id}`).then((response) => {
      res.send(response.data);
    });
  });

  app.post("/api/.car/cars", (req, res) => {
    axios
      .post(
        `${baseUrl}/`,
        {
          name: req.body.name,
          img_url: req.body.img_url,
          price: req.body.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        res.send(response.data);
      });
  });

  app.put("/api/.car/cars/:id", (req, res) => {
    axios
      .put(
        `${baseUrl}/${req.params.id}`,
        {
          name: req.body.name,
          img_url: req.body.img_url,
          price: req.body.price,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        res.send(response.data);
      });
  });

  app.delete("/api/.car/cars/:id", (req, res) => {
    axios.delete(`${baseUrl}/${req.params.id}`).then((response) => {
      res.send(response.data);
    });
  });
};

export default initCarService;
