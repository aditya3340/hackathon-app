import React from "react";

const ErrorDisplay = ({ message }) => <p style={{ color: "red" }}>{message}</p>;

const FormField = ({
  id,
  label,
  type,
  placeholder,
  register,
  validation,
  error,
  accept,
  onChangeHandler,
}) => {
  const inputClassName = () => {
    switch (type) {
      case "date":
        return "max-w-[80%] m-auto p-2 text-sm rounded-lg";
      case "file":
        return "text-md w-full py-2 px-4 rounded-lg border border-gray-300 cursor-pointer";
      default:
        return "m-auto py-2 px-4 rounded-lg border border-gray-300";
    }
  };

  return (
    <div className="my-4">
      <label
        className={`text-md inline-block my-2 ${
          type == "date" ? "text-sm" : ""
        }`}
      >
        {label}:
      </label>
      <br />
      {type == "text" ? (
        <textarea
          id={id}
          type={type}
          placeholder={placeholder}
          accept={accept}
          {...register(id, validation)}
          className="w-full m-auto h-full resize-none rounded-lg py-2 px-4"
          rows={id == "description" ? 5 : 1}
          maxLength={id == "description" ? 3000 : 50}
          onChange={onChangeHandler}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          accept={accept}
          {...register(id, validation)}
          className={inputClassName()}
        />
      )}

      {error && <ErrorDisplay message={error} />}
    </div>
  );
};

export default FormField;
