import React, { ChangeEvent } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface FormData {
  fullname?: string;
  email: string;
  password: string;
}

interface InputProps {
  setInputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}

export const InputName: React.FC<InputProps> = ({
  setInputHandle,
  formData,
}) => {
  return (
    <input
      value={formData.fullname}
      onChange={setInputHandle}
      type="text"
      name="fullname"
      placeholder="Full name"
      required
      className="outline-none bg-transparent text-[#bdadad] border-b border-[#e4d9d9] font-poppins font-normal text-base leading-6 w-full my-5 mx-auto" // Tailwind CSS classes
    />
  );
};

export const InputEmail: React.FC<InputProps> = ({
  setInputHandle,
  formData,
}) => {
  return (
    <input
      onChange={setInputHandle}
      type="email"
      value={formData.email}
      name="email"
      placeholder="Email address"
      required
      className="outline-none bg-transparent text-[#bdadad] border-b border-[#e4d9d9] font-poppins font-normal text-base leading-6 w-full my-5 mx-auto" // Tailwind CSS classes
    />
  );
};

interface PasswordProps extends InputProps {
  visible: boolean;
  eyeHandle: () => void;
}

export const InputPassword: React.FC<PasswordProps> = ({
  setInputHandle,
  formData,
  visible,
  eyeHandle,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={visible ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={formData.password}
        required
        onChange={setInputHandle}
        className="outline-none bg-transparent text-[#bdadad] border-b border-[#e4d9d9] font-poppins font-normal text-base leading-6 w-full my-5 mx-auto" // Add some padding to the left of the text
      />
      <div
        onClick={eyeHandle}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        {" "}
        {/* Adjust these values to position the icon */}
        {visible ? (
          <MdVisibility className="text-gray-400" />
        ) : (
          <MdVisibilityOff className="text-gray-400" />
        )}
      </div>
    </div>
  );
};
