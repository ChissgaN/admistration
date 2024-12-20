import { Router } from "express";
import { product_router } from "./ProductRouter.js";
import { category_router } from "./CategoryRouter.js";
import { status_router } from "./StatusRouter.js";
import { user_router } from "./UserRouter.js";
import { orden_detail_router } from "./OrdenDetailRouter.js";
import { client_router } from "./ClientRouter.js";
import { auth_router } from "./AuthRouter.js";

import auth from "../middlewares/Auth.js";

const app_router = Router();

/**
 * @description Register all routes
 * @param {Router} app
 */
export function routes(app) {
  app.use("/api/v1", app_router);

  app_router.use("/auth", auth_router);

  app_router.use("/products", auth, product_router);
  app_router.use("/categories", auth, category_router);
  app_router.use("/status", auth, status_router);
  app_router.use("/users", auth, user_router);
  app_router.use("/orden_details", auth, orden_detail_router);
  app_router.use("/client", auth, client_router);
}

export default routes;
