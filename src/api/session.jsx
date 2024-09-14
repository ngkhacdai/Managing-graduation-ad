import axios from "./custom_axios";

export const getSession = async () => {
  const response = await axios.get("/getSessionForAdmin");
  return response;
};

export const createSession = async (form) => {
  const response = await axios.post("/admin/createSession", form);
  return response;
};
export const updateSession = async (form, id) => {
  console.log(form);
  console.log(id);

  const response = await axios.patch(`/admin/updateSession/${id}`, form);
  return response;
};
export const deleteSession = async (id) => {
  const response = await axios.delete(`/deleteSession/${id}`);
  return response;
};
