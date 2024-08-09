import axios from "./custom_axios";

export const addNewBranch = (form) => {
  return axios.post("/admin/addBranch", form);
};

export const getBranchByPage = () => {
  return axios.get(`/admin/getBranch`);
};

export const updateBranch = (form, id) => {
  return axios.patch(`/admin/upDateBranch/${id}`, form);
};

export const deleteBranch = (id) => {
  return axios.delete(`/admin/deleteBranch/${id}`);
};
