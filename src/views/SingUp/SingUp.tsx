import React, { useState } from 'react';
// import './SingUp.css'
// import { AppFormSingUp } from "../../components/form/AppFormSingUp";
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { TitleContainer } from '../../components/Home/TitleContainer';
import { Validator } from '../../classes/Validator';

import style from './SingUp.module.css';
import { MessageError } from '../../components/SingUp/MessageError';

function SingUp(): React.JSX.Element {
  type ErrorMessages = {
    nickName: string;
    email: string;
    password: string;
    age: string;
    repeatPassword: string;
  };

  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    nickName: '',
    email: "",
    age: "",
    password: "",
    repeatPassword: ""

  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("se hizo un submit");
  }

  function handleNickNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newNickName = event.target.value;
    setNickName(newNickName);
    // Si el nick no contiene al menos una letra el validador devuelve false
    if (!Validator.validateNick(newNickName)) {
      setErrorMessages(prevState => ({
        ...prevState,
        nickName: "El nick debe contener al menos 3 carácteres alfabéticos"
      }));
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        nickName: ""
      }));
    }
  }
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
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
  }

  function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newAge = event.target.value;
    setAge(newAge);

    if (!Validator.validateAge(newAge)) {
      setErrorMessages(prevState => ({
        ...prevState,
        age: "La edad debe de ser un número"
      }));
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        age: ""
      }));

    }
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (!Validator.validatePassword(newPassword)) {
      setErrorMessages(prevState => ({
        ...prevState,
        password: "La contraseña debe de tener al menos 8 carácteres, 1 letra minúscula, 1 letra mayúscula, 1 número y 1 carácter especial"
      }));
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        password: ""
      }));
    }
  }


  function handlePasswordRepeatChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newRepeatPassword = event.target.value;
    setPasswordRepeat(newRepeatPassword);

    if (newRepeatPassword !== password) {
      console.log('las contraseñas no coinciden');
      setErrorMessages(prevState => ({
        ...prevState,
        repeatPassword: "Las contraseñas no coinciden"
      }));
    } else {
      setErrorMessages(prevState => ({
        ...prevState,
        repeatPassword: ""
      }));

    }
  }


  return (
    <>
      <Header />
      <main className={style.main}>
        <div className={style.containerLogin}>
          <TitleContainer title='registrarse' />
          <main className={style.containerMain}>
            <form className={style.form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nickName">Nick:</label>
                <input
                  type="text"
                  value={nickName}
                  onChange={handleNickNameChange}
                />

                {errorMessages.nickName && (
                  <MessageError text={errorMessages.nickName} />
                )}

              </div>

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
                <label htmlFor="edad">Edad:</label>
                <input
                  type="text"
                  value={age}
                  onChange={handleAgeChange}
                />

                {errorMessages.age && (
                  <MessageError text={errorMessages.age} />
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

                {errorMessages.password && (
                  <MessageError text={errorMessages.password} />
                )}
              </div>

              <div>
                <label htmlFor="password">Confirmar Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  value={passwordRepeat}
                  onChange={handlePasswordRepeatChange}
                />

                {errorMessages.repeatPassword && (
                  <MessageError text={errorMessages.repeatPassword} />
                )}
              </div>

              <div className={style.containerDivCheckbox}>
                <input
                    className={style.checkbox}
                    type="checkbox"
                    id="checkbox"
                    required
                />
                <label 
                  className={style.labelCheckbox} 
                  htmlFor="checkbox"
                >
                  Aceptar la Política de Privacidad y los Términos y Condiciones
                </label>
              </div>

              <div className={style.containerButton}>
                <button
                  className={style.buttonLogin}
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </main>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { SingUp };
