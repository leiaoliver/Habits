import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

/**
 * Metodo HTTP: Get(buscar informação), Post(criar algo), Put(atualizar recurso), Patch(atualizar recurso especifico),Delete(deletar)
 */

app
	.listen({
		port: 3333,
		host: "0.0.0.0",
	})
	.then(() => {
		console.log("HTTP Server running!");
	});
