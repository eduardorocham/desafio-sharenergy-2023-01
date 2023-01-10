import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        let sucess = false;

        if(req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ');
            if (authType === 'Bearer') {
                try {
                    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY  as string);
                    sucess = true;
                } catch(err) {

                }
            }       
        }

        if(sucess) {
            next();
        } else {
            res.status(403);
            res.json({error: 'Não autorizado'});
        };
    }
}