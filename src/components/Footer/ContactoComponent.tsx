import React, { useState } from 'react';
import './ContactoComponent.css';

function ContactoComponent(): React.JSX.Element {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const destinario = 'destinatario@example.com';
    const enlaceMailto = `mailto:${destinario}?subject=Mensaje%20de%20${encodeURIComponent(
      nombre
    )}&body=${encodeURIComponent(mensaje)}%0D%0A%0D%0A${encodeURIComponent(email)}`;

    window.location.href = enlaceMailto;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label><br />
      <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br />
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label htmlFor="mensaje">Mensaje:</label><br />
      <textarea id="mensaje" name="mensaje" placeholder="Escribe aquí tu mensaje..." value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea><br />
      <input type="submit" value="Enviar mensaje" />
    </form>
  );
}

export { ContactoComponent };
