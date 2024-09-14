import axios from "./custom_axios";
import qs from "qs";
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

export const filterProjectNotDone = async (form) => {
  const response = await axios.get("/filterProjectNotDone", {
    params: form,
    paramsSerializer: (params) => {
      return qs.stringify(params, {
        skipNulls: true,
        arrayFormat: "repeat",
        indices: false,
      });
    },
  });

  return response;
};
export const filterProjectDone = async (form) => {
  const response = await axios.get("/filterProjectDone", {
    params: form,
    paramsSerializer: (params) => {
      return qs.stringify(params, {
        skipNulls: true,
        arrayFormat: "repeat",
        indices: false,
      });
    },
  });

  return response;
};

export const detailProject = async (projectId) => {
  const response = await axios.get(`/getDetailProject/${projectId}`);
  return response;
};

export const detailProjectFinish = async (projectId) => {
  const response = await axios.get(`/getDetailProject/${projectId}`);
  return response;
};

export const getProjectBySession = async (projectId) => {
  const response = await axios.get(
    `/admin/getAllProjectBySession/${projectId}`
  );
  return response;
};

export const updateStatus = async (form) => {
  const response = await axios.patch(`/admin/updateStatus`, form);
  return response;
};
