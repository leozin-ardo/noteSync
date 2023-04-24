export type HttpProvider = {
  use(middleware: any): void;
  listen(callback: () => void): void;
};

export default interface IHttpServer {
  provider: HttpProvider;
  readonly port: number;
  start(): void;
}
