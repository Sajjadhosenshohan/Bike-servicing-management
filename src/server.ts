import { Server } from "http"
import app from "./app";
import config from "./app/config";

const main = () => {
    try {
        app.listen(config.port, () => {
          console.log(`Server running on port: ${config.port}`);
        });
      } catch (error) {
        console.error('Error starting server:', error);
      }
}

main();