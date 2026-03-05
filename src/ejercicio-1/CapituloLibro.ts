import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Esta clase extiende a ElementoBibliografico. La clase representa a un capítulo de libro
 */

export class CapituloLibro extends ElementoBibliografico {
  constructor(
    titulo: string, 
    autores: string[], 
    palabrasClave: string[], 
    resumen: string,
    fecha: Date, 
    paginas: string, 
    editorial: string,
    public tituloLibro: string
  ) {
    super(titulo, autores, palabrasClave, resumen, fecha, paginas, editorial);
  }

  /**
   * Este método convierte los atributos del CapituloLibro a formato IEEE
   * @returns devuelve los datos del capítulo en formato IEEE
   */

  toIEEE(): string {
    const autoresStr = this.autores.join(", ");
    const año = this.fechaPublicacion.getFullYear();
    return `${autoresStr}, "${this.titulo}," en ${this.tituloLibro}, ${this.editorial}, ${año}, pp. ${this.paginas}.`;
  }
}