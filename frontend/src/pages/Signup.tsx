import { Quote } from "../components/Quote";
import { SignHeader } from "../components/SignHeader";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { SignupInput } from "@tanishkadeep/bytes-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios({
        method: "post",
        url: `${BACKEND_URL}/user/signup`,
        data: postInputs,
      });

      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blog/bulk");
    } catch (err) {}
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-screen lg:w-1/2 flex justify-center items-center">
        <div className="w-1/2">
          <SignHeader type="Signup"></SignHeader>
          <Input
            title="Name"
            placeholder="John Doe"
            type="text"
            onChange={(e) => {
              setPostInputs({ ...postInputs, name: e.target.value });
            }}
          ></Input>
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
          <Button text="Sign up" onClick={sendRequest}></Button>
        </div>
      </div>

      <div className="lg:block w-1/2 hidden">
        <Quote />
      </div>
    </div>
  );
};
