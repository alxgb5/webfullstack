import { Request, Response } from "express";

const publicRoutes = [
  "/api/hello",
  "/api/.user/inscription",
  "/api/.user/login",
  "/api/.user/login/admin",
];

export default module.exports = () => {
  return (req: Request, res: Response, next) => {
    if (!publicRoutes.includes(req.url) && !req.header("Authorization")) {
      return res.status(500).send({
        message: "Missing JWT",
        url: req.url,
      });
    } else {
      next();
    }
  };
};
