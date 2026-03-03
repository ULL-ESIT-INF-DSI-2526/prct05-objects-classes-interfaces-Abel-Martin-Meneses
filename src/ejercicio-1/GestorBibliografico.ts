import { ElementoBibliografico } from "./ElementoBibliografico";
import { ArticuloRevista } from "./ArticuloRevista";

export class GestorBibliografico {
  private elementos: ElementoBibliografico[] = [];

  agregarElemento(elemento: ElementoBibliografico): void {
    this.elementos.push(elemento);
  }

  mostrarTabla(datos = this.elementos): void {
    console.table(datos);
  }

  buscar(criterios: { keyword?: string, titulo?: string, autores?: string, editorial?: string }): ElementoBibliografico[] {
    return this.elementos.filter(el => {
      const matchKeyword = criterios.keyword ? el.palabrasClave.some(p => p.toLowerCase().includes(criterios.keyword!.toLowerCase())) : true;
      const matchTitulo = criterios.titulo ? el.titulo.toLowerCase().includes(criterios.titulo.toLowerCase()) : true;
      const matchEditorial = criterios.editorial ? el.editorial.toLowerCase().includes(criterios.editorial.toLowerCase()) : true;
      const matchAutores = criterios.autores ? el.autores.some(a => a.toLowerCase().includes(criterios.autores!.toLowerCase())) : true;
      
      return matchKeyword && matchTitulo && matchEditorial && matchAutores;
    });
  }

  exportarIEEE(elementos: ElementoBibliografico[]): void {
    console.log("--- EXPORTACIÓN IEEE ---");
    elementos.forEach(el => console.log(el.toIEEE()));
  }
}

const gestor = new GestorBibliografico();

const art1 = new ArticuloRevista(
  "IA en la ULL", ["Juan Pérez"], ["IA", "Educación"], "Resumen...", 
  new Date("2023-05-10"), 20, "IEEE Press", "Revista de Computación", 12, 4
);

gestor.agregarElemento(art1);
gestor.mostrarTabla();
const resultados = gestor.buscar({ keyword: "IA" });
gestor.exportarIEEE(resultados);