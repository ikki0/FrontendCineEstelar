import { useForm, SubmitHandler } from 'react-hook-form';
import './singUpForm.css'; // Ajusta la ruta según tu estructura de archivos

interface FormData {
  nick: string;
  email: string;
  contraseña: string;
  verificarContraseña: string;
}

function AppFormSingUp() {
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
        <input className='controls' {...register('nick', { required: true })} placeholder="nickname" />
        {errors.nick && <span>Los campos son obligatorios</span>}

        <input className='controls'{...register('email', { required: true })} placeholder="email" />
        {errors.email && <span>Los campos son obligatorios</span>}

        <input className='controls'{...register('contraseña', { required: true })} placeholder="contraseña" type="password" />
        {errors.contraseña && <span>Los campos son obligatorios</span>}

        <input className='controls'
          {...register('verificarContraseña', {
            required: true,
            validate: (value) => value === getValues('contraseña'),
          })}
          placeholder="verificar contraseña"
          type="password"
        />
        {errors.verificarContraseña && <span>las contraseñas no coinciden</span>}

        <button className='botons' type="submit">Submit</button>
      </form>
    </div>
  );
}

export { AppFormSingUp};
