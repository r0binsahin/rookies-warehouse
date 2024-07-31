"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.car = (0, pg_core_1.pgTable)('car', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name'),
    amount: (0, pg_core_1.integer)('amount'),
});
