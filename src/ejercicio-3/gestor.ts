import { Chef } from "./chef";
import { Recetario } from "./recetario";
import { Receta } from "./receta";
import { Paso } from "./paso";

export class Gestor {
  constructor(private chefs: Chef[]) {}

  public addChef(nuevoChef: Chef): void {
    if (this.chefs.some((chef) => chef.nombre === nuevoChef.nombre)) {
      throw console.error("Este chef ya se encuentra en el sistema");
    } else {
      this.chefs.push(nuevoChef);
    }
  }

  public mostrarInfo(): void {
    console.table(this.chefs)
  }

  public buscarChef(nombre: string): void {
    const resultado: Chef[] = this.chefs.filter((chef) => chef.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (resultado.length > 0) console.table(resultado);
    else console.error(`No se ha encontrado ningún chef con ese nombre (${nombre})`);    
  }

  public buscarReceta(nombre: string): void {
    let resultado: Receta[] = [];
    this.chefs.forEach((chef) => {
      chef.recetario.recetas.forEach((receta) => {
        if (receta.nombre.toLowerCase().includes(nombre.toLowerCase())) {
          resultado.push(receta);
        }
      })
    })
    if (resultado.length > 0) console.table(resultado)
    else console.error(`No hay ninguna receta que coincida con '${nombre}'`)
  }

  public buscarPaso(nombre: string): void {
    let resultado: Paso[] = [];
    this.chefs.forEach((chef) => {
      chef.recetario.recetas.forEach((receta) => {
        receta.pasos.forEach((paso) => {
          if (paso.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            resultado.push(paso)
          }
        })
      })
    })
    if (resultado.length > 0) console.table(resultado);
    else console.error(`No hay ningún paso que coincida con '${nombre}'`);
  }
}

const paso_1 = new Paso('Paso 1', 220, ['et 1', 'et 2'], false);
const paso_2 = new Paso('Paso 2', 250, ['et 1', 'et 2'], true);

const receta_1 = new Receta('Receta 1', 2020, [paso_1, paso_2]);
const receta_2 = new Receta('Receta 2', 2010, [paso_1, paso_2]);

const recetario_1 = new Recetario([receta_1, receta_2]);
const recetario_2 = new Recetario([receta_1, receta_2]);

const chef_1 = new Chef('Pedro', 1000, recetario_1);
const chef_2 = new Chef('Juan', 3, recetario_2);
const chef_3 = new Chef('Juan Luis', 800, recetario_1);

const gestor = new Gestor([chef_1, chef_2, chef_3]);

gestor.mostrarInfo();

gestor.buscarChef('J');

gestor.buscarReceta('1');

gestor.buscarPaso('Paso 1')