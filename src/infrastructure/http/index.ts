import IHttpServer, { HttpProvider } from './interface/http';

export default class HttpServer implements IHttpServer {
  readonly port: number;
  provider: HttpProvider;

  constructor() {
    this.port = Number(process.env.PORT) || 3000;
  }

  public static httpTest = (): HttpServer => {
    const http = new HttpServer();
    http.provider = {
      listen: (callback: () => void) => {
        callback();
      },
      use() {},
    };

    return http;
  };

  public static framework = (frameworkClass: HttpProvider): HttpServer => {
    const http = new HttpServer();
    http.provider = frameworkClass;
    return http;
  };

  start = (): void => {
    this.provider.listen(() => {
      console.log('Server listen at port:', this.port);
    });
  };
}
