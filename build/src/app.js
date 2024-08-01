"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const db_1 = require("../server/db");
const schema_1 = require("../server/db/schema");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.status(200).send('Hello from Index1');
    logger_1.logger.info('Index page!');
});
app.get('/status', (_req, res) => {
    res.status(200).send('Hello from Rookies');
    logger_1.logger.info('Status page!');
});
app.post('/warehouse', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { car_id } = req.body;
    if (!car_id)
        return res.status(404).send('Error: bad request. No car_id found!');
    yield db_1.db
        .insert(schema_1.warehouse)
        .values({ car_id: car_id, status: `${car_id ? 'OK' : 'ERROR'}` })
        .returning();
    res.status(200).json('Payment success');
    logger_1.logger.info({
        level: 'info',
        message: 'Payment processed successfully',
        car_id,
    });
}));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
