import { useNavigate } from 'react-router-dom';
import SimplePage from '../components/SimplePage';
import Typography from '../components/Typography';
import Alert from '../components/Alert';
import { IconUserCircle } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { signin, errors: serverErrors, isAuthenticated } = useAuth();

  useEffect(() => {
    isAuthenticated;
    if (isAuthenticated) return navigate('/pqrs');
  }, [isAuthenticated, navigate]);

  const onSubmit = async (data) => {
    await signin(data);
  };

  return (
    <SimplePage>
      <div className='bg-white flex flex-col items-center justify-center py-24'>
        {serverErrors.length > 0 && <Alert message={serverErrors[0]} />}
        <div className='login-card mx-4 min-w-fit border px-4 pt-2 pb-4 border-black rounded-xl bg-gray-300 w-[calc(100vw-2rem)] max-w-[400px]'>
          <div className='login-card-title flex gap-2 flex-col sm:flex-row justify-around items-center mb-4'>
            <Typography
              variant='p'
              className='border border-black p-2 rounded-md bg-white'
            >
              Inicio de sesión
            </Typography>
          </div>
          <div className='login-card-body flex flex-col justify-center items-center'>
            <div className='login-icon w-fit p-2 text-center rounded-full border border-black bg-white'>
              <IconUserCircle size='128px' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
              <div className='form-group mb-6'>
                <label htmlFor='email'>Correo electrónico</label>
                <input
                  {...register('email', { required: true })}
                  type='email'
                  id='email'
                  name='email'
                  autoComplete='email'
                  className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Ingresa tu correo electrónico'
                  required
                />
                {errors.email && (
                  <p className='text-red-800 text-center'>
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>
              <div className='form-group mb-6'>
                <label htmlFor='password'>Contraseña</label>
                <input
                  {...register('password', { required: true })}
                  type='password'
                  name='password'
                  id='password'
                  className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Ingresa tu contraseña'
                  required
                />
                {errors.password && (
                  <p className='text-red-800 text-center'>
                    {errors.password.message?.toString()}
                  </p>
                )}
              </div>
              <div className='form-buttons flex items-center justify-around gap-4 flex-col sm:flex-row w-full'>
                <input
                  type='submit'
                  value='Iniciar sesión'
                  className='bg-[#3B82F6] hover:bg-blue-700 focus:outline-none focus:ring-blue-500 active:bg-blue-800 py-2 px-4 rounded-xl text-white'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </SimplePage>
  );
};

export default Login;
