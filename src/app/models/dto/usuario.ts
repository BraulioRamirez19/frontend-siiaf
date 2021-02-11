import { Role } from './role';

export class Usuario {

  id: number;
  username: string;
  password: string;
  nombre: string;
  enabled: boolean;
  email: string;
  intentos: number;
  createAt: string;
  roles: Role[];

}