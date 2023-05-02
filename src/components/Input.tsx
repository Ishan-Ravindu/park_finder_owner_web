import React from "react";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  error?: string;
}

const Input: React.FC<props> = ({ title, error, name, ...other }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-base font-medium text-gray-900 dark:text-gray-200"
      >
        {title}
      </label>
      <div className="mt-2.5">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          id={name}
          {...other}
        />
        {error && (
          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
