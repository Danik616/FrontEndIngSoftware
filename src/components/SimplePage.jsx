import Navbar from './Navbar';

const SimplePage = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default SimplePage;
