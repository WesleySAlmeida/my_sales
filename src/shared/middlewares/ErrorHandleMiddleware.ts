import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export default class ErrorHandleMiddleware {
  public static handleError(error: Error, req: Request, res: Response, next: NextFunction) {
    // Logar o erro completo
    console.error("Erro capturado pelo middleware:", error);

    if(error instanceof AppError) {
      return res.status(error.statusCode).json({
        type: 'error',
        message: error.message
      });
    }

    return res.status(500).json({
      type: 'error',
      message: error.message
    });
  }
}
