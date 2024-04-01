import { useEffect } from "react";
import { IoMdAlert } from "react-icons/io";

function AlertUser({ title, setAlertTitle, setShowAlert }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
      setAlertTitle("");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setShowAlert(false);
    setAlertTitle("");
  };

  return (
    <div
      className="flex bg-green-200 border border-gray-300 text-gray-600  mb-10 -mt-10 md:px-2 md:py-2 md:-mt-12 md:mb-2 w-max rounded relative"
      role="alert"
    >
      <strong className="inline text-sm md:text-lg font-bold ml-1 w-8">
        <IoMdAlert />
      </strong>
      <span className="text-sm md:text-sm inline mr-10">{title}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current -mt-3 sm:-mt-1 h-6 w-6 text-gray-500"
          role="button"
          onClick={handleClose}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}

export default AlertUser;
