// import fetch from "node-fetch";
import { PageInfo } from "../../typings";
import API from "./axios";

export const fetchPageInfo = async () => {
  const { data } = await API.get<{ pageInfo: PageInfo }>(`/getPageInfo`);

  return data.pageInfo;
};
