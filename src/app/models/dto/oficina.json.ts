import { Oficina } from './oficina';

export const OFICINA: Oficina = {
    id: 5,
    nombre: 'Gerencia Regional Sureste',
    ciudad: 'Mérida, Yucatán',
    gerentes: [
        { id: 1, puesto: 'Gerente Regional', nombre: 'María Cristina Méndez Alvarado', telefono: '99.9946.1329' },
        { id: 2, puesto: 'Coordinador Regional', nombre: 'Julio César Interian Díaz', telefono: '99.9946.1327' }
    ],
    descripcion: 'Alguna descripción sobre la infraestructura de la gerencia así como detalle de las estaciones y demás información relevante.',
    personal: 143,
    personalTotal: 319,
    centro: true,
    torre: true,
    infraestructura: true
}
