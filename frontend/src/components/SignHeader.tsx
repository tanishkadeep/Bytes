import { Link } from "react-router-dom";

export const SignHeader = ({ type }: { type: "Signup" | "Signin" }) => {
  return (
    <div className="pb-8">
      <div className="font-extrabold text-4xl pb-2 text-center">
        {type == "Signup" ? "Create an account" : "Log in"}
      </div>
      <div className="flex text-gray-500 font-medium justify-center">
        <div className="pr-1">
          {type == "Signup"
            ? "Already have an account?"
            : "Don't have an account?"}
        </div>
        <div className="underline">
          {type == "Signup" ? (
            <Link to="/signin"> Log in </Link>
          ) : (
            <Link to="/signup"> Sign up </Link>
          )}
        </div>
      </div>
    </div>
  );
};
