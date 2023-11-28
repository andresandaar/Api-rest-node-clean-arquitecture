
import { envs } from "./config";
import { AppRautes } from "./presentation/routes";
import {Server} from "./presentation/server";

(()=>{
main()
})();

async function main (){
// Tpdp:Await base de datos

//Inicio del server express
 const server= new Server({
  port:envs.PORT,
  routes:AppRautes.routes
 });
  server.startServer()

}