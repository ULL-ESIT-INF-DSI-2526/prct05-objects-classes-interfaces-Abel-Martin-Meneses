/**
 * Esta clase abstracta sirve como plantilla para las clases concretas Jugador y Equipo
 */

export abstract class Participante {
  constructor(
    protected _id: number,
    protected _nombre: string,
    protected _pais: string,
    protected _fechaInscripcion: Date,
    protected _puntuacion: number = 0
  ) {
    this.nombre = _nombre;
    this.fechaInscripcion = _fechaInscripcion;
    this.puntuacion = _puntuacion;
  }

  get id(): number { return this._id; }
  get nombre(): string { return this._nombre; }
  set nombre(val: string) {
    if (val === "") throw new Error("Nombre no puede estar vacío");
    this._nombre = val;
  }

  get pais(): string { return this._pais; }
  get fechaInscripcion(): Date { return this._fechaInscripcion; }
  set fechaInscripcion(val: Date) {
    if (val > new Date()) throw new Error("Fecha no puede ser futura");
    this._fechaInscripcion = val;
  }

  get puntuacion(): number { return this._puntuacion; }
  set puntuacion(val: number) {
    if (val < 0) throw new Error("La puntuación no puede ser negativa");
    this._puntuacion = val;
  }

  abstract perfil(): string;
}