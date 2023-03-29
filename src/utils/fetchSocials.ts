import fetch from "node-fetch";
import { Social } from "../../typings";

export const fetchSocial = async () => {
  const res = await fetch(`/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  // console.log("fetching",socials)

  return socials;
};
