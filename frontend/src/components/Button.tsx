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
    <div className="bg-black text-white text-center rounded-lg mt-5 font-semibold cursor-pointer hover:opacity-85">
      {!isLoading ? (
        <button onClick={onClick} disabled={disabled} className="w-full py-2">
          {text}
        </button>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};
