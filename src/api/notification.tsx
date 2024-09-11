import axios from "./custom_axios";

export const createNotification = async (form) => {
  const response = await axios.post("/admin/createNotification", form);
  return response;
};
