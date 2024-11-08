const Loading = ({
  loading,
  message = 'Loading...',
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
  message?: string;
}) => {
  return (
    <>{loading ? <p className='flex justify-center'>{message}</p> : children}</>
  );
};
export default Loading;
