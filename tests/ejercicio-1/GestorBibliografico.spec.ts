import { describe, test, expect, beforeEach } from "vitest";
import { GestorBibliografico } from "../../src/ejercicio-1/GestorBibliografico";
import { ArticuloRevista } from "../../src/ejercicio-1/ArticuloRevista";
import { CapituloLibro } from "../../src/ejercicio-1/CapituloLibro";

describe('Pruebas del Gestor de Referencias Bibliográficas - ULL', () => {
  let gestor: GestorBibliografico;

  beforeEach(() => {
    gestor = new GestorBibliografico();
  });

  test('Debería añadir y buscar un Artículo de Revista por Título', () => {
    const art = new ArticuloRevista(
      "Deep Learning en la detección de intrusiones", 
      ["M. Alonso", "J. Pérez"], 
      ["IA", "Seguridad", "Redes"], 
      "Análisis de redes neuronales aplicadas a seguridad...", 
      new Date("2026-02-15"), 
      "102-115", 
      "IEEE Press", 
      "Computers & Security", 45, 3
    );

    gestor.agregarElemento(art);
    const resultados = gestor.buscar({ titulo: "Deep Learning" });
    
    expect(resultados.length).toBe(1);
    expect(resultados[0].titulo).toContain("Deep Learning");
  });

  test('Debería generar el formato IEEE exacto para un Capítulo de Libro', () => {
    const cap = new CapituloLibro(
      "Fundamentos de Usabilidad", 
      ["Elena G. Morales"], 
      ["UX", "Accesibilidad"], 
      "Principios de interacción persona-computador...", 
      new Date("2025-11-20"), 
      "20-45", 
      "Editorial ULL", 
      "Manual de Diseño de Interfaces"
    );

    // El formato IEEE para capítulo: Autor, "Título cap," en Título libro, Editorial, Año, pp. Páginas.
    const esperado = 'Elena G. Morales, "Fundamentos de Usabilidad," en Manual de Diseño de Interfaces, Editorial ULL, 2025, pp. 20-45.';
    expect(cap.toIEEE()).toBe(esperado);
  });

  test('Debería permitir búsquedas combinadas (Palabra clave + Editorial)', () => {
    const art1 = new ArticuloRevista(
      "Seguridad en Redes", ["A. Smith"], ["Redes"], "...", 
      new Date(), "1-5", "ACM", "Journal", 1, 1
    );
    const art2 = new ArticuloRevista(
      "Protocolos TCP/IP", ["B. Jones"], ["Redes"], "...", 
      new Date(), "5-10", "IEEE", "Journal", 2, 1
    );
    
    gestor.agregarElemento(art1);
    gestor.agregarElemento(art2);

    // Buscamos algo con keyword 'Redes' pero que sea de la editorial 'ACM'
    const busqueda = gestor.buscar({ keyword: "Redes", editorial: "ACM" });
    
    expect(busqueda.length).toBe(1);
    expect(busqueda[0].autores).toContain("A. Smith");
  });

  test('Debería filtrar por autor correctamente', () => {
    const art = new ArticuloRevista(
      "Sistemas Distribuidos", 
      ["Tanenbaum", "Van Steen"], 
      ["Sistemas"], "...", new Date(), "1", "Pearson", "Revista", 1, 1
    );

    gestor.agregarElemento(art);
    
    const resultados = gestor.buscar({ autores: "Tanenbaum" });
    expect(resultados.length).toBe(1);
  });
});