import { Validators } from '../../../config';

export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const camposEsperados = ['email', 'password'];
    // Verificar si hay campos no deseados en object:
    const camposNoDeseados = Object.keys(object).filter(
      (campo) => !camposEsperados.includes(campo)
    );

    if (camposNoDeseados.length > 0) {
      return [`Campos no permitidos: ${camposNoDeseados.join(', ')}`];
    }

    const email = object.email?.trim();
    const password = object.password?.trim()?.replace(/\s/g, '');

    if (!email || !password) {
      return [
          !email
          ? 'Missing email'
          : !password
          ? 'Missing password'
          : ''
      ];
    }
    if (!Validators.email.test(email)) return ['Email is not valid'];
    if (password.length < 6) return ['Password too short'];
    return [undefined, new LoginUserDto( email, password)];
  }
  
}
