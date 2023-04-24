import HttpServer from './infrastructure/http';
import ExpressServer from './infrastructure/http/providers/express';

const httpServer = HttpServer.framework(new ExpressServer());

httpServer.start();
