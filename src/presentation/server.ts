
import express, { Application, Request, Response } from 'express';

interface Options{
    port?:number
}

export class Server {
  public readonly app: Application;
  private PORT: number;

  constructor(options:Options) {
    const {port = 3000} = options;
    this.app = express();
    this.PORT =port ;
    this.configureRoutes();
  }

  private configureRoutes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello, World!');
    });
  }

  async startServer(): Promise<void> {
    this.app.listen(this.PORT, () => {
      console.log(`Server is listening on port ${this.PORT}`);
    });
  }
};
