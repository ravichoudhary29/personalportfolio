// import fetch from "node-fetch";
import { Social } from "../../typings";
import API from "./axios";

export const fetchSocial = async () => {
  const { data } = await API.get<{ socials: Array<Social> }>(`/getSocials`);

  return data.socials;
};
