interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ open, handleClose, children }: IModalProps) => {
  return (
    <dialog open={open} onClose={handleClose} className='relative z-10'>
      <div className='fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center'>
        <div className='bg-white w-9/12 py-6 px-12 rounded min-h-96 shadow-lg max-w-screen-md relative overflow-y-auto max-h-screen'>
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default CustomModal;
