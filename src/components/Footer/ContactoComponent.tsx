import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactoComponent.css';

function ContactoComponent(): React.JSX.Element {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <h1 className='h1'>Contacto</h1>
        <div className="grupo">
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required /><span className="barra"></span>
        </div>
        <div className="grupo">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><span className="barra"></span>
        </div>
        <div className="grupo">
          <label>Mensaje</label>
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea><span className="barra"></span>
        </div>
        <button className='btn' type="submit">Enviar mensaje</button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default ContactoComponent;
