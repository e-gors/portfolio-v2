import { ToastContainer } from "react-toastify";
import type { FC } from "react";
import "react-toastify/dist/ReactToastify.css";

// Toast container component
const ToastNotificationContainer: FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
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

export default ToastNotificationContainer;
