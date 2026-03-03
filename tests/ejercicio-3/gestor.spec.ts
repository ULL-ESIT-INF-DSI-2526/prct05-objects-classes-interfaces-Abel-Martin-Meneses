import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Gestor } from '../../src/ejercicio-3/gestor';
import { Chef } from '../../src/ejercicio-3/chef';
import { Recetario } from '../../src/ejercicio-3/recetario';
import { Receta } from '../../src/ejercicio-3/receta';
import { Paso } from '../../src/ejercicio-3/paso';

describe('Pruebas de la clase Gestor', () => {
  let gestor: Gestor;
  let chef1: Chef;
  let chef2: Chef;
  let paso1: Paso;
  let receta1: Receta;

  beforeEach(() => {
    // Limpiar mocks antes de cada test
    vi.restoreAllMocks();

    // Setup de datos básicos
    paso1 = new Paso('Paso 1', 20, ['ETIQUETA'], false);
    receta1 = new Receta('Receta A', 2024, [paso1]);
    const recetario = new Recetario([receta1]);
    
    chef1 = new Chef('Pedro', 10, recetario);
    chef2 = new Chef('Juan', 5, recetario);
    
    gestor = new Gestor([chef1]);
  });

  it('Debe instanciar el gestor correctamente', () => {
    expect(gestor).toBeInstanceOf(Gestor);
  });

  it('addChef: debe añadir un chef nuevo si no existe', () => {
    gestor.addChef(chef2);
    // Verificamos internamente o mediante el método de búsqueda
    const spy = vi.spyOn(console, 'table');
    gestor.mostrarInfo();
    expect(spy).toHaveBeenCalled();
  });

  it('addChef: debe lanzar error si el chef ya existe', () => {
    // Tu código lanza un error a través de console.error dentro de un throw
    expect(() => gestor.addChef(chef1)).toThrow();
  });

  it('mostrarInfo: debe llamar a console.table', () => {
    const spy = vi.spyOn(console, 'table');
    gestor.mostrarInfo();
    expect(spy).toHaveBeenCalledWith(expect.any(Array));
  });

  describe('Métodos de búsqueda', () => {
    it('buscarChef: debe encontrar chefs por nombre parcial', () => {
      const spy = vi.spyOn(console, 'table');
      gestor.buscarChef('Ped');
      expect(spy).toHaveBeenCalled();
    });

    it('buscarChef: debe mostrar error si no encuentra al chef', () => {
      const spy = vi.spyOn(console, 'error');
      gestor.buscarChef('Zulema');
      expect(spy).toHaveBeenCalledWith(expect.stringContaining('No se ha encontrado'));
    });

    it('buscarReceta: debe encontrar recetas por nombre', () => {
      const spy = vi.spyOn(console, 'table');
      gestor.buscarReceta('Receta A');
      expect(spy).toHaveBeenCalled();
    });

    it('buscarReceta: debe mostrar error si la receta no existe', () => {
      const spy = vi.spyOn(console, 'error');
      gestor.buscarReceta('Paella');
      expect(spy).toHaveBeenCalled();
    });

    it('buscarPaso: debe encontrar pasos por nombre', () => {
      const spy = vi.spyOn(console, 'table');
      gestor.buscarPaso('Paso 1');
      expect(spy).toHaveBeenCalled();
    });

    it('buscarPaso: debe mostrar error si el paso no existe', () => {
      const spy = vi.spyOn(console, 'error');
      gestor.buscarPaso('Paso Inexistente');
      expect(spy).toHaveBeenCalled();
    });
  });
});