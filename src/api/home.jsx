import axios from "./custom_axios";

export const getDataHome = async () => {
  return await axios.get("/admin/getData");
};
