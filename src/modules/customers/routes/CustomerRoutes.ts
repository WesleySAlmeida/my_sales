import { Router } from "express";
import CustomersControllers from "../controllers/CustomersControllers";
import AuthMiddlware from "@shared/middlewares/authMiddleware";
import { createCustomerSchmema, idParamnsValidate, updateCustomerSchema } from "../schemas/CustomerSchema";

const customerRouter = Router();
const customersController = new CustomersControllers();


customerRouter.use(AuthMiddlware.execute);
customerRouter.get('/', customersController.index);
customerRouter.get('/:id', idParamnsValidate ,customersController.show);
customerRouter.post('/', createCustomerSchmema ,customersController.create);
customerRouter.patch('/:id', idParamnsValidate, updateCustomerSchema ,customersController.update);
customerRouter.delete('/:id', idParamnsValidate ,customersController.delete);

export default customerRouter;
