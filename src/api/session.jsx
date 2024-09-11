import axios from "./custom_axios";

export const getSession = async () => {
  const response = await axios.get("/getSessionForAdmin");
  return response;
};
