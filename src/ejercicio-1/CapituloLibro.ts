import { ElementoBibliografico } from "./ElementoBibliografico";

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

  toIEEE(): string {
    const autoresStr = this.autores.join(", ");
    const año = this.fechaPublicacion.getFullYear();
    return `${autoresStr}, "${this.titulo}," en ${this.tituloLibro}, ${this.editorial}, ${año}, pp. ${this.paginas}.`;
  }
}