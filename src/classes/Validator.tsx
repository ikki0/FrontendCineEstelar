class Validator {
    static validateNick(nick: string): boolean {
      // Verifica que el nick tenga al menos 3 carácteres 
      return /^[a-zA-Z0-9]{3,}$/.test(nick);
    }
  
    static validateEmail(email: string): boolean {
      // Verifica que el correo cumpla con el patrón de correo electrónico
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
  
    static validateAge(age: string): boolean {
      // Verifica que la edad contenga algo y sea un número
      return !isNaN(Number(age)) && age.trim() !== "";
    }
  
    static validatePassword(password: string): boolean {
      // Verifica que la contraseña contenga al menos una minúscula, una mayúscula, un número, un carácter especial y tenga al menos 8 caracteres
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
    }
}

export { Validator };