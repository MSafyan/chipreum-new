import React, { ChangeEvent } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useField } from "formik";

interface FormData {
  fullname?: string;
  email: string;
  password: string;
}

interface InputProps {
  setInputHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}

export const InputName: React.FC = (props) => {
  const [field, meta] = useField("fullname");
  return (
    <div className="w-full">
      <input
        {...field}
        {...props}
        className="outline-none bg-transparent text-[#bdadad] border-b border-[#e4d9d9] font-poppins font-normal text-base leading-6 w-full my-5 mx-auto" // Tailwind CSS classes
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 mt-1 text-sm italic text-left">
          {meta.error}
        </div>
      )}
    </div>
  );
};
export const InputEmail: React.FC = () => {
  const [field, meta] = useField("email");

  return (
    <div className="w-full">
      <input
        {...field}
        type="email"
        placeholder="Email address"
        className="outline-none bg-transparent text-[#bdadad] border-b border-[#e4d9d9] font-poppins font-normal text-base leading-6 w-full my-5 mx-auto" // Tailwind CSS classes
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 mt-1 text-sm italic text-left">
          {meta.error}
        </div>
      )}
    </div>
  );
};

interface PasswordProps {
  name: string;
  visible?: boolean;
  eyeHandle?: () => void;
  label?: string;
}

export const InputPassword: React.FC<PasswordProps> = ({
  name,
  visible = false,
  eyeHandle,
  label = "Password",
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="w-full">
      <div className="relative w-full">
        <label>{label}</label>
        <input
          {...field}
          type={visible ? "text" : "password"}
          placeholder={label}
          className="outline-none bg-transparent text-[#bdadad] border-b border-[#e4d9d9] font-poppins font-normal text-base leading-6 w-full my-5 mx-auto"
        />
        {eyeHandle && (
          <div
            onClick={eyeHandle}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            {visible ? (
              <MdVisibility className="text-gray-400" />
            ) : (
              <MdVisibilityOff className="text-gray-400" />
            )}
          </div>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 mt-1 text-sm italic text-left">
          {meta.error}
        </div>
      )}
    </div>
  );
};

interface SelectProps {
  name: string;
  label: string;
}

export const Select: React.FC<SelectProps> = ({ name, label }) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative h-10 rounded text-sm font-normal leading-6 tracking-wide text-left px-3 py-1 mb-10 w-56">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        {...field}
        required
        className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="" selected={field.value === "" ? true : false}>
          Select
        </option>
        <option value="male" selected={field.value === "male" ? true : false}>
          Male
        </option>
        <option
          value="female"
          selected={field.value === "female" ? true : false}
        >
          Female
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 6l10 9 10-9-2-2-8 7-8-7z" />
        </svg>
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 mt-1 text-sm italic text-left">
          {meta.error}
        </div>
      )}
    </div>
  );
};
