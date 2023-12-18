import { MovieDateInterface } from "../interfaces/MovieDateInterface";


class MovieDateClass {
  private data: MovieDateInterface;

  constructor(data: MovieDateInterface) {
    this.data = data;
  }

   getIdHorario(): number {
    return this.data.idHorario;
  }

  // Método para obtener el título de la foto
  getIdDia(): string {
    return this.data.idDia;
  }

  getIdHora(): string {
    return this.data.idHora;
  }
}

export { MovieDateClass };