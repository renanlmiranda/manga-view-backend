import { AppDataSource } from "./ormConfig";

AppDataSource.initialize()
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log("Database error", error));
