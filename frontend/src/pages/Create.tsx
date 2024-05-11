import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios({
        method: "post",
        url: `${BACKEND_URL}/blog`,
        data: {
          title,
          content,
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      navigate("/blog/" + response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Appbar />
      <div className="flex flex-col items-center">
        <div className="w-7/12 mt-24">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className=" w-full px-4 rounded-lg outline-none h-20 text-5xl font-extrabold bg-gray-50"
            placeholder="Title..."
          />
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className=" w-full p-4 rounded-lg outline-none resize-none text-lg font-medium font-serif bg-gray-50 mt-8"
            placeholder="Write here..."
            rows={30}
          />
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 outline-none font-bold self-start py-2 text-lg mt-5 rounded-md mb-10"
            onClick={sendRequest}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
