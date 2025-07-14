import { toast, type ToastOptions } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = (
  status: "success" | "error",
  message: string,
  options: ToastOptions
) => {
  if (status === "success") return toast.success(message, options);
  else return toast.error(message, options);
};

const ToastNotificationContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export { ToastNotification, ToastNotificationContainer };
