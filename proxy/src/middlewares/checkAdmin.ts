import axios from "axios";
import { Request, Response } from "express";

export default module.exports = () => {
  return (req: Request, res: Response, next: () => void) => {
    if (
      req.url.startsWith("/api/.car/cars") &&
      ["POST", "PUT", "DELETE"].includes(req.method)
    ) {
      axios
        .post(
          "http://nginx/api/user/check_role",
          {
            role: "ROLE_ADMIN",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: req.header("Authorization"),
            },
          }
        )
        .then((response) => {
          if (!response.data.isAuthorized) {
            return res.status(403).send({
              message: "Admin role required",
            });
          } else {
            next();
          }
        })
        .catch(() => {
          return res.status(403).send({
            message: "Admin role required",
          });
        });
    } else {
      next();
    }
  };
};
