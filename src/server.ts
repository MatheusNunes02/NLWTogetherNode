import "reflect-metadata";
import express from 'express';
import { router } from "./services/routes";


import "./database"

const app = express();

//Definir que o express possa usar jsons
app.use(express.json()); 

//Utilizar as rotas do Router
app.use(router);

//Ouvir a porta 3000
app.listen(3000, () => console.log("Server is running!!!"))