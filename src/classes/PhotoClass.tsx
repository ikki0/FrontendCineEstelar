import { PhotoInterface } from "../interfaces/PhotoInterface";

class PhotoClass {
  private data: PhotoInterface;

  constructor(data: PhotoInterface) {
    this.data = data;
  }

   // Método para obtener el id de la foto
   getId(): number {
    return this.data.id;
  }

  // Método para obtener el título de la foto
  getTitle(): string {
    return this.data.title;
  }

  // Método para obtener la url de la foto
  getUrl(): string {
    return this.data.url;
  }

  // Método para obtener la url de la foto en miniatura
  getThumbnailUrl(): string {
    return this.data.thumbnailUrl;
  }

  // Método para obtener los datos de la foto
  getData(): PhotoInterface {
    return this.data;
  }
}

export { PhotoClass };