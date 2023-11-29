import {Request, Response } from "express";
import { AuthRepository, RegisterUserDto } from "../../domain";


export class AuthController {

    constructor(private readonly authRepository:AuthRepository,) {}
    
    registerUser = (req: Request, res: Response) => {
        
       const [error,registerUserDto] = RegisterUserDto.create(req.body);
       if (error) return res.status(401).json({error})
       
       this.authRepository.register(registerUserDto!).then(user=>res.json(user)).catch(error=>{
       return res.status(error.statusCode).json({error: error.message})
    })

    }

    loginUser = (req: Request, res: Response) => {
        res.json('Desde el login')
    }

}