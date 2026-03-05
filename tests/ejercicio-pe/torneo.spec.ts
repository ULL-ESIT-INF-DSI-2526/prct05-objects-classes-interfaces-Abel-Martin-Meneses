import { describe, test, expect, beforeEach } from "vitest";
import { Jugador } from "../../src/ejercicio-pe/jugador";
import { Equipo } from "../../src/ejercicio-pe/equipo";
import { Torneo } from "../../src/ejercicio-pe/torneo";

describe('Torneo', () => {
  let torneo: Torneo;

  beforeEach(() => {
    torneo = new Torneo("DSI Open", 1, 1);
  });

  test('Validación de plazas agotadas', () => {
    const j1 = new Jugador(1, "Pepe", "España", new Date(), 2, "pepe1234", "Plata", 0);
    const j2 = new Jugador(2, "Luis", "España", new Date(), 5, "luis12", "Oro", 1);
    torneo.inscribir(j1);
    expect(() => torneo.inscribir(j2)).toThrow("No quedan plazas disponibles");
  });

  test('Registro de partida exitoso y suma de puntos', () => {
    const j1 = new Jugador(1, "Pepe", "España", new Date(), 0, "pepe1234", "Plata", 0);
    const eq = new Equipo(2, "Equipo 2", "España", new Date(), 0, "Mercadona", ["p1", "p2"]);
    
    const t2 = new Torneo("T2", 5, 5);
    t2.inscribir(j1);
    t2.inscribir(eq);
    
    t2.registrarPartida(1, 2, 1, 100, 20);
    expect(j1.puntuacion).toBe(100);
    expect(eq.puntuacion).toBe(20);
  });

  test('Error al registrar partida con no inscrito', () => {
    expect(() => torneo.registrarPartida(3, 4, 3, 10, 0)).toThrowError("Participantes deben estar inscritos");
  });

  test('Búsqueda por ID y Gamertag', () => {
    const j = new Jugador(1, "Pepe", "España", new Date(), 2, "pepe1234", "Plata", 0);
    const eq = new Equipo(2, "Equipo 2", "España", new Date(), 0, "Mercadona", ["p1", "p2"]);
    torneo.inscribir(j);
    torneo.inscribir(eq);
    expect(torneo.buscar({ id: 2 })).toHaveLength(1);
    expect(torneo.buscar({ gamertag: "pepe1234" })).toHaveLength(1);
  });
});