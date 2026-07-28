import  express  from "express";
import cors from 'cors';
import "reflect-metadata";
import routes from './routes/index.ts'
import 'express-async-errors'
import ErrorHandleMiddleware from "../middlewares/ErrorHandleMiddleware.ts";
import { AppDataSource } from "../typeorm/data-source.ts"

AppDataSource.initialize().then( async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(routes);
  app.use(ErrorHandleMiddleware.haddleError);

  console.log('Connected to the database!')

  app.listen(3333, () => {
    console.log("Server started on port 3333!");
  })

}).catch(error => {
  console.log('Failed to connect to the database', error);
})





