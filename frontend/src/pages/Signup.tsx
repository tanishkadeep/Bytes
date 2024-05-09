import { Quote } from "../components/Quote";
import { SignHeader } from "../components/SignHeader";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-screen lg:w-1/2 flex justify-center items-center">
        <div>
          <SignHeader type="Signup"></SignHeader>
          <Input title="Name" placeholder="John Doe" type="text"></Input>
          <Input title="Email" placeholder="user@example.com" type="email"></Input>
          <Input title="Password" placeholder="" type="password"></Input>
          <Button type="Signup"></Button>
        </div>
      </div>

      <div className="lg:block w-1/2 hidden">
        <Quote />
      </div>
    </div>
  );
};
