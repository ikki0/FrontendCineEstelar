import * as React from 'react';

import style from './Login.module.css'
import { TitleContainer } from '../Home/TitleContainer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [messageError, setMessageError] = useState<string>('');

  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
            setMessageError(data.msg);
          }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
    <main>
      <div className={style.containerLogin}>
        <TitleContainer title='iniciar sesión' />

        <main className={style.containerMain}>
          { 
            messageError &&
              <div className={style.containerError}>
                <p className={style.messageError}>
                  Error: {messageError}
                </p> 
              </div> 
             
            }
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Correo:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className={style.containerButton}>
              <button 
                className={style.buttonLogin}
                type="submit"
                >
                  Iniciar Sesión
                </button>
            </div>
          </form>
        </main>
      </div>
    </main>
  );
}
