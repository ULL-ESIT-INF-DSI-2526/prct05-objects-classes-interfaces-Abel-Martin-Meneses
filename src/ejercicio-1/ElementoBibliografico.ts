import { IEEE } from "./IEEE";

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

  abstract toIEEE(): string;
}