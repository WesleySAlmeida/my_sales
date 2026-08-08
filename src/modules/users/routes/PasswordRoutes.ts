import { Router } from "express";
import ResetPasswordController from "../controllers/ResetPasswordControllers";
import ForgotPasswordController from "../controllers/ForgotPasswordControllers";
import { ForgotPasswordSchema, ResetPasswordSchema } from "../schemas/PasswordSchemas";

const passwordRouter = Router();
const resetPasswordController = new ResetPasswordController()
const forgotPasswordController = new ForgotPasswordController()

passwordRouter.post('/forgot', ForgotPasswordSchema, forgotPasswordController.create);
passwordRouter.post('/reset', ResetPasswordSchema, resetPasswordController.create);

export default passwordRouter;
