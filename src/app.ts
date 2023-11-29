import { envs } from './config';
import { MongoDatabase } from './data/mongodb';
import { AppRautes } from './presentation/routes';
import { Server } from './presentation/server';

(() => {
  main();
})();

async function main() {
  // Await base de datos
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL
  });

  //Inicio del server express
  const server = new Server({
    port: envs.PORT,
    routes: AppRautes.routes
  });
  server.startServer();
}
