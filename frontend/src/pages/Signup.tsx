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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.post(
        `${BACKEND_URL}/user/signup`,
        postInputs
      );

      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (err: any) {
      if (err.response) {
        console.log(err.response);
        if (err.response.data === "Incorrect Inputs")
          setError("Invalid email or password. Please try again");
        else setError(err.response.data);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
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
          <div className="text-gray-400 mb-4">
            *Password length must be atleast 8 characters
          </div>
          {error && (
            <p className="text-red-500 font-bold text-center mt-4">{error}</p>
          )}{" "}
          <Button
            text={isLoading ? "Loading..." : "Sign up"}
            onClick={sendRequest}
            disabled={isLoading}
          ></Button>
        </div>
      </div>

      <div className="lg:block w-1/2 hidden">
        <Quote />
      </div>
    </div>
  );
};
