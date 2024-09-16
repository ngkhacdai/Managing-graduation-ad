import axios from "./custom_axios";
import qs from "qs";
export const getAllTeacherAPI = async () => {
  return await axios.get("/findAllTeacher");
};

export const addTeacher = async (form) => {
  return await axios.post("/admin/addUserTeacher", form);
};

export const updateTeacher = async (id, form) => {
  return await axios.patch(`/admin/updateMenteesLimit/${id}`, form);
};
export const searchTeacher = async (form) => {
  return await axios.get(`/admin/searchTeacher`, {
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
