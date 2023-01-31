import Fastify from "fastify";
import cors from "@fastify/cors";
import {prisma} from './lib/prisma'

const app = Fastify();


app.register(cors);
/**
 * Metodo HTTP: Get(buscar informação), Post(criar algo), Put(atualizar recurso), Patch(atualizar recurso especifico),Delete(deletar)
 */

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber",
      },
    },
  });
  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running");
  });
