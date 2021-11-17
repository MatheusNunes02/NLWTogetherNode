import { Request, Response, NextFunction, response } from 'express';
import { verify} from 'jsonwebtoken';

interface IPayLoad {
    sub:string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){

    //Receber o token
    const authtoken = request.headers.authorization

    //Validar se token está preenchido

    if(!authtoken){
        return response.status(401).end()
    }

    //Validar se token é válido
    const [,token] = authtoken.split(" ");

    try{
        const { sub } = verify(token,'51615df7d22c4eb181eeac2a5d7f0c29') as IPayLoad;

        request.user_id = sub;
        // console.log(decode);
        return next();
    }catch(err){
        return response.status(401).end();
    }


    //Recuperar informações do usuário



}