import { Document } from 'mongoose';
// Definición del modelo de datos en MongoDB
export interface User extends Document {
  name: string;
  email: string;
  password: string;
  img?: string;
  roles: string[];
}
