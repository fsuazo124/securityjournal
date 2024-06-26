import { useEffect } from "react";

function Alert({ title, setShowAlert, setUserName, setPassword, setAlertTitle}) {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setShowAlert(false);
          setAlertTitle("");
        }, 5000);

        return () => clearTimeout(timeoutId);
      }, []);
    
  const handleClose = () => {
    setShowAlert(false);
    setAlertTitle("")
    setPassword("");
    setUserName("");
  };

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 lg:px-4 lg:py-3 px-1 py-2 rounded relative -mb-40 lg:mb-20 "
      role="alert"
    >
      <strong className="block md:inline text-sm md:text-base font-bold mr-5">Error</strong>
      <span className="text-xs md:text-base inline mr-10">{title}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-red-500"
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

export default Alert;
