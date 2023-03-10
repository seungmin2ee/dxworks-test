import axios from "axios";

const BaseURL = "http://quiz.dxworks.kr";

const landingsApi = async () => {
  const landingsData = await axios(`${BaseURL}/v1/landing/list`);

  return landingsData;
};

export const landingImgApi = async (url: string) => {
  const landingImgData = await axios({
    url: `${BaseURL}${url}`,
    method: "GET",
    responseType: "blob",
  });

  return landingImgData;
};

export default landingsApi;
