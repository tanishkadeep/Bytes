import { ChangeEvent } from "react";

interface inputs {
  title: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ title, placeholder, type, onChange }: inputs) => {
  return (
    <div className="pb-3">
      <div className="font-semibold pb-1">{title}</div>
      <div className="outline-2 outline rounded outline-gray-200 py-1 px-3">
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="outline-none w-full"
        />
      </div>
    </div>
  );
};
