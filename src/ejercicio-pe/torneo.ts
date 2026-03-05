import { Participante } from "./participante";
import { Jugador } from "./jugador";
import { Equipo } from "./equipo";

/**
 * Interfaz que representa a una Partida del torneo
 */

export interface Partida {
  p1: Participante;
  p2: Participante;
  ganadorId: number;
  puntosP1: number;
  puntosP2: number;
  fecha: Date;
}

/**
 * Clase que representa un torneo con sus participantes y partidas
 */

export class Torneo {
  private inscritos: Participante[] = [];
  private partidas: Partida[] = [];

  constructor(
    public nombre: string,
    private maxJugadores: number,
    private maxEquipos: number
  ) {}

  /**
   * Este método inscribe a un participante en el torneo verificando que hayan plazas disponibles
   * @param p - es el participante a inscribir
   */
  inscribir(p: Participante): void {
    const esJugador: boolean = p instanceof Jugador;
    const actuales: number = this.inscritos.filter(i => esJugador ? i instanceof Jugador : i instanceof Equipo).length;
    const limite: number = esJugador ? this.maxJugadores : this.maxEquipos;

    if (actuales >= limite) throw new Error("No quedan plazas disponibles");
    this.inscritos.push(p);
  }

  /**
   * Este método registra una partida en el torneo
   * @param p1Id - Id del participante 1
   * @param p2Id - Id del participante 2
   * @param ganadorId - Id del ganador
   * @param pts1 - Puntuación del participante 1
   * @param pts2 - Puntuación del participante 2
   */
  registrarPartida(p1Id: number, p2Id: number, ganadorId: number, pts1: number, pts2: number): void {
    const part1: Participante | undefined = this.inscritos.find(i => i.id === p1Id);
    const part2: Participante | undefined = this.inscritos.find(i => i.id === p2Id);

    if (!part1 || !part2) throw new Error("Participantes deben estar inscritos");

    part1.puntuacion += pts1;
    part2.puntuacion += pts2;
    this.partidas.push({ p1: part1, p2: part2, ganadorId, puntosP1: pts1, puntosP2: pts2, fecha: new Date() });
  }

  /**
   * Este método busca entre los participantes inscritos en base a un filtro
   * @param filtro - es el filtro por el que se buscará, puede ser el id o el gamertag
   * @returns devuelve una array con el resultado
   */
  buscar(filtro: { id?: number, gamertag?: string }): Participante[] {
    const res: Participante[] = this.inscritos.filter(p => {
      if (filtro.id && p.id === filtro.id) return true;
      if (filtro.gamertag && p instanceof Jugador && p.gamertag === filtro.gamertag) return true;
      return false;
    });
    console.table(res);
    return res;
  }

  /**
   * Este método sirve para obtener una tabla con el ranking del torneo
   * @returns devuelve un array con el ranking
   */
  obtenerRanking(): {Pos: number; ID: number; Nombre: string; Puntos: number;}[] {
    const ranking = [...this.inscritos]
    .sort((a, b) => b.puntuacion - a.puntuacion)
    .map((p, i) => ({ Pos: i + 1, ID: p.id, Nombre: p.nombre, Puntos: p.puntuacion }));
    console.table(ranking);
    return ranking;
  }
}