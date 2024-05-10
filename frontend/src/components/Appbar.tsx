import logo from "../assets/image.jpg";

export const Appbar = () => {
  return (
    <div className="bg-black py-3 px-6 text-white flex justify-center items-center">
      <div>
        <img src={logo} alt="logo" className="w-14" />
      </div>
      <div className="font-custom text-4xl pl-2 font-bold">Bytes</div>
    </div>
  );
};
