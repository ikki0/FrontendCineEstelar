import { useForm, SubmitHandler } from 'react-hook-form';
import './singUpForm.css';

interface FormData {
  email: string;
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
        <input className='controls' {...register('email', { required: true })} placeholder="Email " />
        {errors.email && <span>El campo es obligatorio</span>}

        <input className='controls' {...register('contraseña', { required: true })} placeholder="Contraseña" type="password" />
        {errors.contraseña && <span>El campo es obligatorio</span>}

        <button className='botons' type="submit">Inicio</button>
      </form>
    </div>
  );
}

export { AppFormLogin };