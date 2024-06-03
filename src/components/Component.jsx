const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto px-0${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};

export default Container;
