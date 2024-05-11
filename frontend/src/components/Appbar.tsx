import { Link } from "react-router-dom";
import logo from "../assets/image.jpg";
import { Logout } from "./Logout";

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
      <div className="flex justify-center items-center font-medium text-lg cursor-pointer pr-8">
        <Link to={"/publish"} className="pr-8 hover:text-gray-300">
          Publish &rarr;
        </Link>
        <Logout />
      </div>
    </div>
  );
};
