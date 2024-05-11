import { Link } from "react-router-dom";
import logo from "../assets/image.jpg";

export const Appbar = () => {
  return (
    <div className="bg-black py-3 px-8 text-white flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Link to={"/blogs"}>
          <img src={logo} alt="logo" className="w-14" />
        </Link>
        <Link to={"/blogs"} className="font-custom text-4xl pl-2 font-bold">
          Bytes
        </Link>
      </div>
      <Link to={"/publish"} className="pr-8 font-medium text-lg cursor-pointer">Publish &rarr;</Link>
    </div>
  );
};
