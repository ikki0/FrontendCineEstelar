import { CustomerInterface } from "../interfaces/CustomerInterface";

class CustomerClass {
  private data: CustomerInterface;

  constructor(data: CustomerInterface) {
    this.data = data;
  }

   getNickCliente(): string {
    return this.data.nickCliente;
  }

  // Método para obtener el título de la foto
  getEdadCliente(): number {
    return this.data.edadCliente;
  }

  getCorreoCliente(): string {
    return this.data.correoCliente;
  }

  // Método para obtener la url de la foto
  getAvatarUrl(): string {
    return this.data.avatarUrl;
  }
}

export { CustomerClass };