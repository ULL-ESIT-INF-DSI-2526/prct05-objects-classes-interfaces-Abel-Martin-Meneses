import { Recetario } from "./recetario";

export class Chef {
  constructor(
    public readonly nombre: string, 
    public readonly seguidores: number,
    public readonly recetario: Recetario,
  ) {}
}