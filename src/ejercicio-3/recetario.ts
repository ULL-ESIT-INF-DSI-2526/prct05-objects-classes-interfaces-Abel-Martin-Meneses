import { Receta } from "./receta";

interface InterfaceRecetario {
  recetas: Receta[];
}

export class Recetario implements InterfaceRecetario {
  constructor(
    public readonly recetas: Receta[]
  ) {}
}