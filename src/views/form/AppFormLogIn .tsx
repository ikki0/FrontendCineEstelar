import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './singUpForm.css'; // Ajusta la ruta según tu estructura de archivos

interface FormData {
  emailOrNick: string;
  contraseña: string;
}

function AppFormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (values) => {
    alert('Form submit: ' + JSON.stringify(values));
  };

  return (
    <div className="form-register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='controls' {...register('emailOrNick', { required: true })} placeholder="Email or Nickname" />
        {errors.emailOrNick && <span>El campo es obligatorio</span>}

        <input className='controls' {...register('contraseña', { required: true })} placeholder="Contraseña" type="password" />
        {errors.contraseña && <span>El campo es obligatorio</span>}

        <button className='botons' type="submit">Inicio</button>
      </form>
    </div>
  );
}

export { AppFormLogin };