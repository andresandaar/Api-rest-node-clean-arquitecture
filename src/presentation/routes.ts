import { Router } from "express";
import { AuthRautes } from "./auth/routes";

export class AppRautes {

static get  routes():Router {

const router =Router();

router.use('/api/auth',AuthRautes.routes);
//router.use('/api/user');

return router
}

}