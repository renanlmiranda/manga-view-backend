import "../database/typeorm/config/connection";
import app from "./config/app";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
