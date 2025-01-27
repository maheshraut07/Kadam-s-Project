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

export const getNextSaturday = () => {
  const today = new Date();
  const dayIndex = today.getDay();

  const daysToSaturday = (6 - dayIndex + 7) % 7 || 7;

  const nextSaturday = new Date();
  nextSaturday.setDate(today.getDate() + daysToSaturday);

  return formatDate(nextSaturday);
};

export const getNextFriday = () => {
  const today = new Date();
  const dayIndex = today.getDay();

  const daysToSaturday = (5 - dayIndex + 7) % 7 || 7;

  const nextSaturday = new Date();
  nextSaturday.setDate(today.getDate() + daysToSaturday);

  return formatDate(nextSaturday);
};

export const formatDate = (date) => {
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options).replace(",", "");
};

export const sendMessage = () => {
  const message = `Hello, I want to buy "${item.name}" for ₹ ${item.price}. Please confirm the order.`;
  const whatsappLink = `https://wa.me/${918600855864}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
};
