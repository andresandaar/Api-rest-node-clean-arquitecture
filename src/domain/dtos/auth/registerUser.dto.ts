import { Validators } from "../../../config";

export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {

    }
    
    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        
        const camposEsperados = ['name', 'email', 'password'];
        // Verificar si hay campos no deseados en object:
        const camposNoDeseados = Object.keys(object).filter(
            campo => !camposEsperados.includes(campo)
        );

        if (camposNoDeseados.length > 0) {
            return [ `Campos no permitidos: ${camposNoDeseados.join(', ')}` ]
        }

        const name = object.name?.trim();
        const email = object.email?.trim();
        const password = object.password?.trim()?.replace(/\s/g, '');
        console.log(object)

        if (!name || !email || !password) {
            return [!name ? 'Missing name' : !email ? 'Missing email' : !password ? 'Missing password' : '']
        }
        if (!Validators.email.test(email)) return ['Email is not valid'];
        if (password.length < 6) return ['Password too short'];
        return [undefined, new RegisterUserDto(
            name, email, password
        )];
    }
}