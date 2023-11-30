import jwt from 'jsonwebtoken';



export class JwtAdapter{

    static async generateToken(payload:Object, duration:string ='2h'):Promise<string | null>{
        //todo: generación del seed
    return new Promise((resolve)=>{
        
        jwt.sign(payload,'SEE',{expiresIn:duration},(err,token)=>{

        if (err) return resolve(null);

        resolve(token!)

        })
    })

    }
}