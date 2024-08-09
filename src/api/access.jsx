import axios from "./custom_axios";

export const login = async (form) => {
  return await axios.post("/login", form);
};
