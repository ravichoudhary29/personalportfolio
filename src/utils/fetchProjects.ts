import fetch from "node-fetch";
import { Project } from "../../typings";

export const fetchProjects = async () => {
  const res = await fetch(`/api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  // console.log("fetching",projects)

  return projects;
};
