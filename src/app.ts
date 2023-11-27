import {Server} from "./presentation/server";

(()=>{
main()
})();

async function main (){
// Tpdp:Await base de datos

//Inicio del server express
 const server= new Server({});
  server.startServer()

}