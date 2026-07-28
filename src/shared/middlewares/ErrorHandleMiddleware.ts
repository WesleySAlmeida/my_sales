import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError.ts";



export default class ErrorHandleMiddleware {
  public static haddleError(error: Error, req: Request, res: Response, next: NextFunction) {
    if(error instanceof AppError) {
      res.status(error.statusCode).json({
        type: 'error',
        message: error.message
      })
    }

    return res.status(500).json({
      type: 'error',
      message: error.message
    })

  }
}
