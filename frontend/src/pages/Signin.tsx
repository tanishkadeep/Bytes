import { SigninInput } from "@tanishkadeep/bytes-common";
import { useState } from "react";
import { Quote } from "../components/Quote";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SignHeader } from "../components/SignHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Signin = () => {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios({
        method: "post",
        url: `${BACKEND_URL}/user/signin`,
        data: postInputs,
      });
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="lg:block w-1/2 hidden">
        <Quote />
      </div>
      <div className="w-screen lg:w-1/2 flex justify-center items-center">
        <div className="w-1/2">
          <SignHeader type="Signin"></SignHeader>

          <Input
            title="Email"
            placeholder="user@example.com"
            type="email"
            onChange={(e) => {
              setPostInputs({ ...postInputs, email: e.target.value });
            }}
          ></Input>
          <Input
            title="Password"
            placeholder=""
            type="password"
            onChange={(e) => {
              setPostInputs({ ...postInputs, password: e.target.value });
            }}
          ></Input>
          <Button text="Log in" onClick={sendRequest}></Button>
        </div>
      </div>
    </div>
  );
};
