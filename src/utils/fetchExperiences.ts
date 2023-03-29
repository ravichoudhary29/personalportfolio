// import fetch from "node-fetch";
import { Experience } from "../../typings";
import API from "./axios";

export const fetchExperiences = async () => {
  const { data } = await API.get<{ experiences: Array<Experience> }>(
    `/getExperience`
  );

  return data.experiences;
};
