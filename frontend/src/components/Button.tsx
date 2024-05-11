export const Button = ({
  text,
  onClick,
  isLoading = false,
  disabled = false, 
}: {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean; 
}) => {
  return (
    <div className="bg-black text-white text-center py-2 rounded-lg mt-4 font-semibold cursor-pointer hover:opacity-85">
      {!isLoading ? (
        <button onClick={onClick} disabled={disabled}>
          {text}
        </button>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};
