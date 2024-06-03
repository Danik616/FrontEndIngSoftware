const Typography = ({ variant, className, children }) => {
  const Tag = variant === 'p' ? 'p' : variant;

  const classes = `${
    variant === 'h1'
      ? 'font-bold text-4xl'
      : variant === 'h2'
      ? 'font-bold text-3xl'
      : variant === 'h3'
      ? 'font-bold text-2xl'
      : 'text-base'
  }${className ? ` ${className}` : ''}`;

  return <Tag className={classes}>{children}</Tag>;
};

export default Typography;
