export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className="bg-black text-white text-center py-2 rounded-lg mt-4 font-semibold cursor-pointer hover:opacity-85">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
