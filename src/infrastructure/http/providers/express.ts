import { HttpProvider } from '../interface/http';
import express, { Express } from 'express';

export default class ExpressServer implements HttpProvider {
  provider: Express;

  constructor() {
    this.provider = express();
  }

  use(middleware: any): void {
    this.provider.use(middleware);
  }
  
  listen(callback: () => void): void {
    this.provider.listen(callback());
  }
}
