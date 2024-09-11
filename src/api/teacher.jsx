import axios from "./custom_axios";

export const getAllTeacherAPI = async () => {
  return await axios.get("/findAllTeacher");
};

export const addTeacher = async (form) => {
  return await axios.post("/admin/addUserTeacher", form);
};

export const updateTeacher = async (id, form) => {
  return await axios.patch(`/admin/updateMenteesLimit/${id}`, form);
};
