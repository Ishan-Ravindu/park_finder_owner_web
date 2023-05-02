import React, { ReactNode } from "react";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
}

const Button: React.FC<props> = ({ title, icon, ...other }) => {
  return (
    <button
      {...other}
      type="button"
      className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
    >
      {title}
      {icon && <span className="ml-2 h-4 w-4">{icon}</span>}
    </button>
  );
};

export default Button;
