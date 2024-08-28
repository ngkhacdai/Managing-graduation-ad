import axios from "./custom_axios";

export const getProjectNotDone = async () => {
  const response = await axios.get("/admin/getListProjectNotDone");
  return response;
};
export const getProjectDone = async () => {
  const response = await axios
    .get("/admin/getListProjectDone")
    .catch((err) => console.log(err));
  return response;
};
