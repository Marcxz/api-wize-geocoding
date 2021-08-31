import express, {Express} from 'express';
import * as http from 'http';
require('dotenv').config()

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug'

import routes from './routes/index.router';
import { ConsoleTransportOptions } from 'winston/lib/winston/transports';

const bodyParser = require('body-parser');
const app: Express = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT || 3001;
const debugLog: debug.IDebugger = debug('app');


//Middleware 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

// routes
app.use('', routes);

server.listen(port, () => {
    console.log(`Running on port ${port}`);
});