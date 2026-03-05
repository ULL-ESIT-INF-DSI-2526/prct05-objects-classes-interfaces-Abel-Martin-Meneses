import { ElementoBibliografico } from "./ElementoBibliografico";
import { ArticuloRevista } from "./ArticuloRevista";

/**
 * Esta clase se utiliza para gestionar los distintos ElementoBibliografico
 */

export class GestorBibliografico {
  private elementos: ElementoBibliografico[] = [];

  /**
   * Este método sirve para agregar un elemento al conjunto de elementos bibliograficos
   * @param elemento - es el elemento a agregar
   */

  agregarElemento(elemento: ElementoBibliografico): void {
    this.elementos.push(elemento);
  }

  /**
   * Este método sirve para mostrar en formato de tabla los datos del gestor
   * @param datos - son los elementos a mostrar en la tabla
   */

  mostrarTabla(datos = this.elementos): void {
    console.table(datos);
  }

  /**
   * Este método sirve para buscar mediante filtros dentro del conjunto de elementos bibliograficos
   * @param criterios - son los criterios que se utilizan para buscar un elemento concreto
   * @returns 
   */

  buscar(criterios: { keyword?: string, titulo?: string, autores?: string, editorial?: string }): ElementoBibliografico[] {
    return this.elementos.filter(el => {
      const matchKeyword = criterios.keyword ? el.palabrasClave.some(p => p.toLowerCase().includes(criterios.keyword!.toLowerCase())) : true;
      const matchTitulo = criterios.titulo ? el.titulo.toLowerCase().includes(criterios.titulo.toLowerCase()) : true;
      const matchEditorial = criterios.editorial ? el.editorial.toLowerCase().includes(criterios.editorial.toLowerCase()) : true;
      const matchAutores = criterios.autores ? el.autores.some(a => a.toLowerCase().includes(criterios.autores!.toLowerCase())) : true;
      
      return matchKeyword && matchTitulo && matchEditorial && matchAutores;
    });
  }

  /**
   * Este método sirve para exportar los datos del gestor en formato IEEE
   * @param elementos - son los elementos a exportar en IEEE
   */

  exportarIEEE(elementos: ElementoBibliografico[]): void {
    console.log("--- EXPORTACIÓN IEEE ---");
    elementos.forEach(el => console.log(el.toIEEE()));
  }
}

const gestor = new GestorBibliografico();

const art1 = new ArticuloRevista(
  "IA en la ULL", ["Juan Pérez"], ["IA", "Educación"], "Resumen...", 
  new Date("2023-05-10"), "10-20", "IEEE Press", "Revista de Computación", 12, 4
);

gestor.agregarElemento(art1);
gestor.mostrarTabla();
const resultados = gestor.buscar({ keyword: "IA" });
gestor.exportarIEEE(resultados);