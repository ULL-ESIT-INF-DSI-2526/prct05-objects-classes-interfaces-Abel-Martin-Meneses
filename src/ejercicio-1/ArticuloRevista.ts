import { ElementoBibliografico } from "./ElementoBibliografico";

export class ArticuloRevista extends ElementoBibliografico {
  constructor(
    titulo: string,
    autores: string[],
    palabrasClave: string[],
    resumen: string,
    fechaPublicacion: Date,
    paginas: number,
    editorial: string,
    public revista: string, 
    public volumen: number, 
    public numero: number
  ) {
    super(titulo, autores, palabrasClave, resumen, fechaPublicacion, paginas, editorial);
  }

  toIEEE(): string {
    const autoresStr = this.autores.join(", ");
    const año = this.fechaPublicacion.getFullYear();
    return `${autoresStr}, "${this.titulo}," ${this.revista}, vol. ${this.volumen}, no. ${this.numero}, pp. ${this.paginas}, ${año}.`;
  }
}