import AppError from '@shared/errors/AppError';
import {Request, Response, NextFunction} from 'express';
import { Secret } from 'jsonwebtoken';
import { verify } from 'jsonwebtoken';


interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default class AuthMiddleare {
  static execute(request: Request, response: Response, next: NextFunction): void {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
      throw new AppError('JWT token is missing', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
      const decodedToken = verify(token, process.env.APP_SECRECT as Secret);

      const { sub } = decodedToken as ITokenPayload;

      request.user = {
        id: sub
      };

      return next();
    }catch(error) {
      throw new AppError('Invalid JWT token', 401);
    }
  }
}
