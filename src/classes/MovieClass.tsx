import { MovieInterface } from "../interfaces/MovieInterface";

class MovieClass {
  private data: MovieInterface;

  constructor(data: MovieInterface) {
    this.data = data;
  }

   // Método para obtener el id de la foto
   getIdMovie(): number {
    return this.data.id_pelicula;
  }

  // Método para obtener el título de la foto
  getTitle(): string {
    return this.data.titulo;
  }

  // Método para obtener la url de la foto
  getUrl(): string {
    return this.data.imagen;
  }

  getUrlHorizontal(): string {
    return this.data.imagen_horizontal;
  }

  // Método para obtener los datos de la foto
  getData(): MovieInterface {
    return this.data;
  }
}

export { MovieClass };