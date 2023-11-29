import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepositoryImpl, AuthDatasourceImpl } from "../../infrastructure";

export class AuthRautes {

static get  routes():Router {

const router =Router();
const datasource=new AuthDatasourceImpl()
const authRepository=new AuthRepositoryImpl(datasource)
const controller = new AuthController(authRepository);

//Definir todas las rutas principales
router.post('/login',controller.loginUser);
router.post('/register',controller.registerUser);

return router;
}

}