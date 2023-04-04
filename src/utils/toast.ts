import { toast } from "react-toastify";

export const Toastify = (
  type: "success" | "error" | "warning",
  msg: string,
  timer: number
) => {
  switch (type) {
    case "success":
      toast.success(msg, {
        autoClose: timer,
      });
      break;
    case "error":
      toast.error(msg, {
        autoClose: timer,
      });
      break;
    case "warning":
      toast.warning(msg, {
        autoClose: timer,
      });
      break;
  }
};
