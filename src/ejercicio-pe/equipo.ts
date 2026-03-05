import { Participante } from "./participante";

/**
 * Clase Equipo que representa a los equipos de un torneo. Extiende a la clase Participante
 */

export class Equipo extends Participante {
  constructor(
    id: number, 
    nombre: string, 
    pais: string, 
    fechaInscripcion: Date,
    puntuacion: number,
    private _sponsor: string,
    private _integrantes: string[],
    private _minMiembros: number = 2,
    private _maxMiembros: number = 5
  ) {
    super(id, nombre, pais, fechaInscripcion, puntuacion);
    if (_integrantes.length < _minMiembros || _integrantes.length > _maxMiembros) {
      throw new Error("Número de integrantes no permitido");
    }
  }

  get sponsor(): string { return this._sponsor; };
  get integrantes(): string[] { return this._integrantes; };

  /**
   * Este método construye el perfil del equipo en base a sus atributos
   * @returns devuelve una string con el perfil completo del equipo
   */
  perfil(): string {
    return `Nombre: ${this.nombre}\n
            Identificador: ${this.id}\n
            País: ${this.pais}\n
            Fecha de Inscripción: ${this.fechaInscripcion}\n
            Puntuación: ${this.puntuacion}\n
            Sponsor: ${this.sponsor}\n
            Integrantes: ${this.integrantes}\n`
  }
}