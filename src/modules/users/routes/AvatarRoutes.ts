import { Router } from "express";
import updateAvatarControllers from "../controllers/UpdateAvatarControllers";
import multer from "multer";
import uploadConfig from "@config/upload";
import AuthMiddleare from "@shared/middlewares/authMiddleware";

const avatarRouter = Router();
const userAvatarController = new updateAvatarControllers();
const upload = multer(uploadConfig);

avatarRouter.patch('/', AuthMiddleare.execute, upload.single('avatar'), userAvatarController.update);

export default avatarRouter;
