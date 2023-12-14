import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactoComponent.css';
import { TitleContainer } from '../Home/TitleContainer';
import { ButtonSubmit } from '../Button/ButtonSubmit';
import { Validator } from '../../classes/Validator';
import { MessageError } from '../SingUp/MessageError';

function ContactoComponent(): React.JSX.Element {
  type ErrorMessages = {
    email: string;
    emptyFields: string
  };

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    email: "",
    emptyFields: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Verificar Error si algun campo esta vacío
    const fieldsEmpty = [email, nombre, mensaje].some((field) => field === "");
    let newErrorMessages = {...errorMessages};

    if (fieldsEmpty) {
      newErrorMessages = {
        ...newErrorMessages,
        emptyFields: "Todos los campos deben ser rellenados"
      };

    } else {
      newErrorMessages = {
        ...newErrorMessages,
        emptyFields: ""
      };
    }

    setErrorMessages(newErrorMessages);
    // Verificar Error si existe algun mensaje de error
    const someFieldNoValid = Object.values(newErrorMessages).some((message) => message !== "");

    if (someFieldNoValid) {
      console.log("Existen errores en los campos del formulario");
      return;
    }

    const destinatario = 'xxx@gmail.com';
    const url = 'https://formsubmit.co/ajax/xxx@gmail.com';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destinatario,
          subject: `Mensaje de ${nombre}`,
          message: mensaje,
          replyTo: email,
        }),
      });

      if (response.ok) {
        toast.success('Mensaje enviado correctamente', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setNombre('');
        setEmail('');
        setMensaje('');
      } else {
        toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

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


  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <header className='contacto-header'>
          <TitleContainer title="Contacto" />
          {errorMessages.emptyFields && (
            <MessageError text={errorMessages.emptyFields} />
          )}
        </header>
        <div className="grupo">
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><span className="barra"></span>
        </div>
        <div className="grupo">
          <label>Email</label>
          {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><span className="barra"></span> */}
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
          />

          {errorMessages.email && (
            <MessageError text={errorMessages.email} />
          )}
        </div>
        <div className="grupo">
          <label>Mensaje</label>
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} ></textarea><span className="barra"></span>
        </div>
        <ButtonSubmit text="Enviar mensaje" />
      </div>
      <ToastContainer />
    </form>
  );
}

export default ContactoComponent;
