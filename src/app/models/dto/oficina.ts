import { Personal } from './personal';

export class Oficina {

    id: number;
    nombre: string;
    ciudad: string;
    gerentes: Personal[];
    descripcion: string;
    personal: number;
    personalTotal: number;
    centro: boolean;
    torre: boolean;
    infraestructura: boolean;

}
