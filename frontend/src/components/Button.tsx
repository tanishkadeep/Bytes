export const Button = ({ type }: { type: "Signup" | "Signin" }) => {
  return (
    <div className="bg-black text-white text-center py-2 rounded-lg mt-4 font-semibold cursor-pointer hover:opacity-85">
      <button>{type}</button>
    </div>
  );
};
