import { ElementoBibliografico } from "./ElementoBibliografico";

/**
 * Clase que extiende a la clase ElementoBibliográfico. La clase representa a un artículo de revista
 */

export class ArticuloRevista extends ElementoBibliografico {
  constructor(
    titulo: string,
    autores: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: string,
    editorial: string,
    public revista: string, 
    public volumen: number, 
    public numero: number
  ) {
    super(titulo, autores, palabrasClave, resumen, fechaPublicacion, paginas, editorial);
  }

  /**
   * Este método convierte los atributos del ArticuloRevista a formato IEEE
   * @returns devuelve los datos del artículo en formato IEEE
   */

  toIEEE(): string {
    const autoresStr = this.autores.join(", ");
    const año = this.fechaPublicacion.getFullYear();
    return `${autoresStr}, "${this.titulo}," ${this.revista}, vol. ${this.volumen}, no. ${this.numero}, pp. ${this.paginas}, ${año}.`;
  }
}