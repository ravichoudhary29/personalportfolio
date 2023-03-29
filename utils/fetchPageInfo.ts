import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", pageInfo);

    return pageInfo;
  } catch (error) {
    console.error(error);
    // Handle the error in some way, such as showing an error message to the user
    return null;
  }
};
