import { describe, test, expect } from "vitest";
import { Equipo } from "../../src/ejercicio-pe/equipo";

describe("Equipo", () => {
  test("Se crea correctamente una instancia de Equipo", () => {
    const equipo = new Equipo(1, "Equipo 1", "España", new Date(), 33, "Mercadona", ["Pepe", "Luis"]);
    expect(equipo).instanceOf(Equipo);
  })

  test("no debe permitir crear un equipo de un solo participante", () => {
    expect(() => new Equipo(1, "Equipo 1", "España", new Date(), 33, "Mercadona", ["Pepe"])).toThrowError("Número de integrantes no permitido")
  })

  test("no debe permitir crear un equipo de un solo participante", () => {
    expect(() => new Equipo(1, "Equipo 1", "España", new Date(), 33, "Mercadona", ["Pepe", "Luis", "Juan", "Pedro", "Marcos", "Sergio"])).toThrowError("Número de integrantes no permitido")
  })

  test("Funciona correctamente el perfil()", () => {
    const equipo = new Equipo(1, "Equipo 1", "España", new Date(), 33, "Mercadona", ["Pepe", "Luis"]);
    expect(equipo.perfil()).includes('Nombre: Equipo 1')
    expect(equipo.perfil()).includes('Identificador: 1')
    expect(equipo.perfil()).includes(`Integrantes: ${equipo.integrantes}`)
  })

  test("no debe permitir un nombre vacío", () => {
    expect(() => new Equipo(1, "", "España", new Date(), 33, "Mercadona", ["Pepe", "Luis"])).toThrowError("Nombre no puede estar vacío");
  });

  test("no debe permitir una fecha futura", () => {
    expect(() => new Equipo(1, "Equipo 1", "España", new Date("2027-01-01"), 33, "Mercadona", ["Pepe", "Luis"])).toThrowError("Fecha no puede ser futura");
  })
})