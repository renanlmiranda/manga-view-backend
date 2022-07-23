/* eslint-disable @typescript-eslint/ban-types */
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "manga-view",
    synchronize: true,
    logging: false,
    entities: ["src/database/typeorm/entities/**.entity.ts"],
    migrations: ["src/database/typeorm/migrations/*{.ts,.js}"],
    migrationsTableName: "tb_migrations",
});
