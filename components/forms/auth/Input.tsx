import React, { forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({label, error, ...props}, ref) => {
  return (
    <div className="relative m-3">
      <label className="background-light900_dark200 absolute -top-3 left-5 rounded-xl px-3 dark:text-light-900">{label}</label>
      <input ref={ref} className="background-light900_dark200 w-[300px] rounded-xl border border-primary-500 p-5 text-primary-500"
             {...props}
      />
      {error &&  <p className="warning-message">{error}</p>}
    </div>
  );
});
Input.displayName = "Input"
export default Input;
