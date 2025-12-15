import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

// Type for status
export type ToastStatus = "success" | "error";

// Function to show toast (non-component)
export const ToastNotification = (
  status: ToastStatus,
  message: string,
  options?: ToastOptions
) => {
  if (status === "success") return toast.success(message, options);
  return toast.error(message, options);
};

// Default options
export const options: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  draggable: true,
  theme: "colored",
};
