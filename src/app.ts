import { envs } from './config';
import { MongoDatabase } from './data/mongodb';
import { AppRautes } from './presentation/routes';
import { Server } from './presentation/server';

(() => {
  main();
})();

async function main() {
  // DB configuration and connection create
  // Await base de datos
  const mongoDatabase = new MongoDatabase(
    {
      uri: envs.MONGO_URL,
      options: {
        dbName: envs.MONGO_DB_NAME,
      }
    }
  );

  await mongoDatabase.connect();

  //Inicio del server express
  const server = new Server({
    port: envs.PORT,
    routes: AppRautes.routes
  });
  server.startServer();
}
