import { useAuth } from '../context/AuthContext';
import Typography from './Typography';

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-lg font-bold'>Supermarket PQRS</div>
        <div className='flex space-x-4'>
          {isAuthenticated ? (
            <>
              <Typography variant={'p'} className={'text-white'}>
                Bienvenido, <span className='font-bold'>{user}</span>!
              </Typography>
              <a href='/logout' className='text-white hover:text-gray-300'>
                Cerrar sesión
              </a>
            </>
          ) : (
            <a href='/login' className='text-white hover:text-gray-300'>
              Iniciar sesión
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
