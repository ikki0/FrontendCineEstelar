import React from 'react';

import style from './Login.module.css'
import { TitleContainer } from '../../components/Home/TitleContainer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Validator } from '../../classes/Validator';
import { MessageError } from '../../components/SingUp/MessageError';
import { ButtonSubmit } from '../../components/Button/ButtonSubmit';
import { ToastContainer, toast } from 'react-toastify';


export default function Login() {
  type ErrorMessages = {
    email: string;
    emptyFields: string;
  };

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    email: "",
    emptyFields: ""
  });
  const [ErrorConnectionMessage, setErrorConnectionMessage] = useState<string>("");

  
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verificar si los campos de email y password están vacíos
    const FieldsEmpty = [email, password].some((field) => field === "");

    //. Si algún campo esta vació agregar mensaje de error y retornar
    if (FieldsEmpty) {
      setErrorMessages(prevState => ({
        ...prevState,
        emptyFields: "Todos los campos deben ser rellenados"
      }));

      return;
    }else {
      setErrorMessages(prevState => ({
        ...prevState,
        emptyFields: ""
      }));
    }

    // Error: Verificar si existe algún mensaje de error
    const error = Object.values(errorMessages).some((message) => message !== "");
    if (error) {
      console.log("Error: No se pasaron todas las validaciones del formulario");
      return;
    }

    const url = new URL('http://localhost:8081/usuarios/login');
    url.searchParams.append('id', email);
    url.searchParams.append('password', password);

    fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data.username !== null) {
          saveNameToLocalStorage(data.username);
          redirectToHomePage();
        } else {
          toast.error('Error inicio de sesión. Por favor, verifique los campos', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3500,
          });
          setErrorConnectionMessage(`El correo y/o la contraseña son incorrectos`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!Validator.validateEmail(newEmail)) {
      setErrorMessages(prevState => ({
        ...prevState,
        email: "El correo debe de cumplir con el patrón de correo electrónico"
      }));
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        email: ""
      }));
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function redirectToHomePage(): void {
    console.log("antes del redirect")
    navigate("/");
  }

  function saveNameToLocalStorage(name: string): void {
    localStorage.setItem('name', name);
    console.log(`La variable name de la local storage es: ${name}`)
  }

  return (
    <>
      <Header />
      <main className={style.main}>
        <div className={style.containerLogin}>
          {
            ErrorConnectionMessage && (
              <MessageError text={ErrorConnectionMessage} />
            )
          }

          {
            errorMessages.emptyFields && (
              <MessageError text={errorMessages.emptyFields} />
            )
          }
          <TitleContainer title='iniciar sesión' />
          <main className={style.containerMain}>
            <form className={style.form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Correo:</label>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />

                {errorMessages.email && (
                  <MessageError text={errorMessages.email} />
                )}
              </div>

              <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className={style.containerButton}>
                <ButtonSubmit text='Iniciar Sesión' />
              </div>
            </form>
          </main>
        </div>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}
