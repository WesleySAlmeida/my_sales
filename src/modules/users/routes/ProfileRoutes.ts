import { Router } from "express";
import ProfileControllers from "../controllers/ProfileControllers";
import { UpdateUserSchema } from "../schemas/UpdateUserSchema";
import AuthMiddleare from "@shared/middlewares/authMiddleware";

const profileRouter = Router();
const profileController = new ProfileControllers();

profileRouter.use(AuthMiddleare.execute);
profileRouter.get('/', profileController.show);
profileRouter.patch('/', UpdateUserSchema, profileController.update);

export default profileRouter;
