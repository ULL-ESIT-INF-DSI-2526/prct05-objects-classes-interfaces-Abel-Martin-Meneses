import { Paso } from "./paso";

interface InterfaceReceta {
  nombre: string,
  año_publi: number,
  pasos: Paso[]
}

export class Receta implements InterfaceReceta {
  constructor(
    public readonly nombre: string,
    public readonly año_publi: number,
    public readonly pasos: Paso[]
  ) {}
}