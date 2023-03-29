// import fetch from "node-fetch";
import { Skill } from "../../typings";
import API from "./axios";

export const fetchSkills = async () => {
  const { data } = await API.get<{ skills: Array<Skill> }>(`/getSkills`);

  return data.skills;
};
