"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warehouse = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.warehouse = (0, pg_core_1.pgTable)('warehouse', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    status: (0, pg_core_1.text)('status').notNull(),
    car_id: (0, pg_core_1.varchar)('car_id').notNull(),
});
