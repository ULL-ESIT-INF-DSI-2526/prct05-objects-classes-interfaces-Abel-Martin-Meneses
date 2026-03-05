import { IEEE } from "./IEEE";

/**
 * Esta clase abstracta se utiliza como plantilla para formar los posibles elementos bibliográficos (artículos de revista, capítulo de libro...)
 */

export abstract class ElementoBibliografico implements IEEE {
  constructor(
    public titulo: string,
    public autores: string[],
    public palabrasClave: string[],
    public resumen: string,
    public fechaPublicacion: Date,
    public paginas: string,
    public editorial: string
  ) {}

  /**
   * Este método abstracto lo deben implementar todas las clases que extiendan a ElementoBibliografico para representar sus datos en formato IEEE
   */

  abstract toIEEE(): string;
}