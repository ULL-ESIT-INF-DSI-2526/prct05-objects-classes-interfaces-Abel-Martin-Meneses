import { Participante } from "./participante";

export type Rango = "Bronce" | "Plata" | "Oro" | "Platino" | "Diamante";

/**
 * Clase Jugador que representa a los jugadores de un torneo. Extiende a la clase Participante
 */

export class Jugador extends Participante {
  constructor(
    id: number,
    nombre: string,
    pais: string,
    fechaInscripcion: Date,
    puntuacion: number,
    private _gamertag: string,
    private _rango: Rango,
    private _partidasJugadas: number 
  ) {
    super(id, nombre, pais, fechaInscripcion, puntuacion);
  }

  get gamertag(): string { return this._gamertag; };
  get rango(): Rango { return this._rango; };
  get partidasJugadas(): number { return this._partidasJugadas; };

  /**
   * Este método construye el perfil del jugador en base a sus atributos
   * @returns devuelve una string con el perfil completo del jugador
   */
  perfil(): string {
    return `Nombre: ${this.nombre}\n
            Identificador: ${this.id}\n
            País: ${this.pais}\n
            Fecha de Inscripción: ${this.fechaInscripcion}\n
            Puntuación: ${this.puntuacion}\n
            Gamertag: ${this.gamertag}\n
            Rango: ${this.rango}\n
            Partidas jugadas: ${this.partidasJugadas}\n`
  }
}