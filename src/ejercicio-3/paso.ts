interface InterfacePaso {
  nombre: string,
  duracion_segs: number,
  etiquetas_clasificacion: string[],
  opcional: boolean,
  num_veces_completado: number
}

export class Paso implements InterfacePaso {
  public num_veces_completado = 0
  constructor(
    public readonly nombre: string,
    public readonly duracion_segs: number,
    public readonly etiquetas_clasificacion: string[],
    public readonly opcional: boolean,
  ) {}

  public pasoCompletado(): void {
    this.num_veces_completado++;
  };
}