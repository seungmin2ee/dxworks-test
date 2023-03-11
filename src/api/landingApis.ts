import axios from "axios";

export interface LandingContent {
  title: string;
  img: string;
  url: string;
  newFlag: boolean;
}

interface ResponseStatus {
  status: 200 | 500;
}

interface LandingData {
  contents: LandingContent[];
  response: ResponseStatus;
}

const API_BASE_URL = "http://quiz.dxworks.kr";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getLandingData = async (): Promise<LandingData> => {
  const { data } = await axiosInstance.get<LandingData>("/v1/landing/list");

  return data;
};

export const getLandingImage = async (url: string): Promise<Blob> => {
  const { data } = await axiosInstance<Blob>({
    url,
    method: "GET",
    responseType: "blob",
  });

  return data;
};
