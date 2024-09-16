import axios from "./custom_axios";
import qs from "qs";

export const getAllStudentAPI = async () => {
  return await axios.get("/findAllStudent");
};

export const addStudent = async (form) => {
  return await axios.post("/admin/addUserStudent", form);
};

export const updateStudent = async (id, form) => {
  return await axios.patch(`/admin/updateUser/${id}`, form);
};

export const searchStudent = async (form) => {
  return await axios.get(`/searchStudent`, {
    params: form,
    paramsSerializer: (params) => {
      return qs.stringify(params, {
        skipNulls: true,
        arrayFormat: "repeat",
        indices: false,
      });
    },
  });
};
