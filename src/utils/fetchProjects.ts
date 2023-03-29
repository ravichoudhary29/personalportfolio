// import fetch from "node-fetch";
import { Project } from "../../typings";
import API from "./axios";

export const fetchProjects = async () => {
  const { data } = await API.get<{ projects: Array<Project> }>(`/getProjects`);

  return data.projects;
};
