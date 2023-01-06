import { Request, Response } from "express";

export default module.exports = () => {
  return (req: Request, res: Response, next) => {
    if (
      ![
        "/api/hello",
        "/api/.user/inscription",
        "/api/.user/login",
        "/api/.user/login/admin",
      ].includes(req.url) &&
      !req.header("Authorization")
    ) {
      res.status(500);
      res.send({
        message: "Missing token",
        url: req.url,
      });
    }

    next();
  };
};
