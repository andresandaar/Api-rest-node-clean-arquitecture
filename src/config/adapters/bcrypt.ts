import { compare, compareSync, hashSync } from "bcryptjs";

export class BcryptAdapter {
  //Encripta la contraseña , saltos 10 por defecto
  static hash(passwordFlat: string): string {
    /* asi: passwordFlat="micontraseña" */
    return hashSync(passwordFlat);
  }

  static compare(passwordFlat: string, hashed: string): boolean {
    return compareSync(passwordFlat, hashed);
  }
}