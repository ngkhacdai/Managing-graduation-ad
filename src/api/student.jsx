import axios from "./custom_axios";

export const getAllStudentAPI = async () => {
  return await axios.get("/findAllStudent");
};

export const addStudent = async (form) => {
  return await axios.post("/admin/addUserStudent", form);
};

export const updateStudent = async (id, form) => {
  return await axios.patch(`/admin/updateUser/${id}`, form);
};
