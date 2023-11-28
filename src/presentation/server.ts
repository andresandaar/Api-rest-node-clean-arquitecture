
import express, { Application, Request, Response, Router } from 'express';

interface Options {
  port?: number,
  routes: Router
}

export class Server {
  public readonly app: Application=express();;
  private port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3001, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  private configureRoutes() {
    this.app.use(this.routes);
  }
  
  private configureMiddlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
  }

  async startServer(): Promise<void> {
    //Middlewares
    this.configureMiddlewares()
    //Usar las rutas definidas
    this.configureRoutes() 
    //Inicializar el servidor 
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }
};
