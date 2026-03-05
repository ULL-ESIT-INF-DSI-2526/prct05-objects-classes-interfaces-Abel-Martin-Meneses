import { describe, test, expect } from "vitest";
import { Jugador } from "../../src/ejercicio-pe/jugador";

describe("Jugador", () => {
  test("Se crea correctamente una instancia de Jugador", () => {
    const jugador_1 = new Jugador(1, "Pepe", "España", new Date(), 33, "pepe1234", "Oro", 12);
    expect(jugador_1).instanceOf(Jugador);
  })

  test("Funciona correctamente el perfil()", () => {
    const jugador_1 = new Jugador(1, "Pepe", "España", new Date(), 33, "pepe1234", "Oro", 12);
    expect(jugador_1.perfil()).includes('Nombre: Pepe')
    expect(jugador_1.perfil()).includes('Identificador: 1')
    expect(jugador_1.perfil()).includes('Gamertag: pepe1234')
  })

  test("no debe permitir un nombre vacío", () => {
    expect(() => new Jugador(1, "", "España", new Date(), 33, "pepe1234", "Oro", 12)).toThrowError("Nombre no puede estar vacío");
  });

  test("no debe permitir una fecha futura", () => {
    expect(() => new Jugador(1, "Pepe", "España", new Date("2027-01-01"), 33, "pepe1234", "Oro", 12)).toThrowError("Fecha no puede ser futura");
  })
})