import SimplePage from '../components/SimplePage';
import Typography from '../components/Typography';
import { useForm } from 'react-hook-form';
import api from '../hooks/axios';

const FormPQRS = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append('tipo', data.type);
    formData.append('comentarios', data.comments);
    formData.append('status', data.status);

    const file = new FormData();
    file.append('archivos', data.attachments[0]);

    try {
      const response = await api.post('/savePQRS', formData);
      console.log(response.data.numeroPQRS);

      // const responseFile = await api.post(`/saveFile/${response.data.numeroPQRS}`, file, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      // console.log(responseFile);

    } catch (error) {
      console.error(error);
    }

  };

  const onSubmit = async (data) => {
    await submitForm(data);
  };

  return (
    <SimplePage>
      <div className='bg-white flex flex-col items-center justify-center py-24'>
        <div className='login-card mx-4 min-w-fit border px-4 pt-2 pb-4 border-black rounded-xl bg-blue-500 w-[calc(100vw-2rem)] max-w-[400px]'>
          <div className='login-card-title flex gap-2 flex-col sm:flex-row justify-around items-center mb-4'>
            <Typography
              variant='p'
              className='border border-black p-2 rounded-md bg-white'
            >
              Formulario PQRS
            </Typography>
          </div>
          <div className='login-card-body flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
              <div className='form-group mb-6'>
                <label htmlFor='type' className='text-white'>
                  Tipo de PQRS
                </label>
                <input
                  {...register('type', { required: true })}
                  type='text'
                  id='type'
                  name='type'
                  className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Ingresa el tipo del PQR'
                  required
                />
                {errors.type && (
                  <p className='text-red-800 text-center'>
                    {errors.type.message?.toString()}
                  </p>
                )}
              </div>
              <div className='form-group mb-6'>
                <label htmlFor='comments' className='text-white'>
                  Comentarios
                </label>
                <input
                  {...register('comments', { required: true })}
                  type='text'
                  id='comments'
                  name='comments'
                  autoComplete='comments'
                  className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Ingresa tus comentarios'
                  required
                />
                {errors.comments && (
                  <p className='text-red-800 text-center'>
                    {errors.comments.message?.toString()}
                  </p>
                )}
              </div>
              <div className='form-group mb-6'>
                <label htmlFor='email' className='text-white'>
                  Estado
                </label>
                <select
                  {...register('status', { required: true })}
                  id='status'
                  name='status'
                  className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                >
                  <option value='1'>Nuevo</option>
                  <option value='2'>En proceso</option>
                  <option value='3'>Resuelto</option>
                  <option value='4'>Rechazado</option>
                </select>
              </div>
              <div className='form-group mb-6'>
                <label htmlFor='email' className='text-white'>
                  Archivos adjuntos
                </label>
                <input
                  {...register('attachments', { required: true })}
                  id='attachments'
                  name='attachments'
                  type='file'
                  className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
              </div>
              <div className='form-buttons flex items-center justify-around gap-4 flex-col sm:flex-row w-full'>
                <input
                  type='submit'
                  value='Enviar PQR'
                  className='bg-white hover:bg-gray-200 focus:outline-none focus:ring-white active:bg-white py-2 px-4 rounded-xl text-black'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </SimplePage>
  );
};

export default FormPQRS;
