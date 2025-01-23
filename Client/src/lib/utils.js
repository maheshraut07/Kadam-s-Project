import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Bounce } from "react-toastify";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toast = {
  warning: {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  },
  style: {
    margin: "1rem",
    width: "90%",
    fontSize: "small",
    fontFamily: "DM Sans",
    fontWeight: "normal",
  },
};
