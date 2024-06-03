const Alert = ({ message }) => {
  return (
    <div
      className='mb-2 p-4 bg-blue-700 items-center text-white leading-none lg:rounded-full flex lg:inline-flex text-center'
      role='alert'
    >
      <span className='font-semibold text-left flex-auto'>{message}</span>
    </div>
  );
};

export default Alert;