const Section = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <h2 className='text-4xl	font-bold mt-12'>{title}</h2>
      <p className='text-sm text-slate-400 mt-1 mb-10'>{subtitle}</p>
      {children}
    </>
  );
};
export default Section;
