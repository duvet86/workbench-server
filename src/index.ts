import dotenv from "dotenv";
import http from "http";

import { normalizePort } from "./utils";
import { handleError, handleListening } from "./serverEvents";
import app from "./express/app";

dotenv.config();

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// tslint:disable-next-line:no-console
server.listen(port, () => console.log(`Server listening on port ${port}.`));
server.on("error", handleError(port));
server.on("listening", handleListening(server));
