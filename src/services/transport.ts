import api from "@/axios-config";
import { ITransportType } from "@/models/ITransportType";
import { AxiosResponse } from "axios";

export const createTrasportType = async (name: string) => {
  try {
    const response: AxiosResponse<ITransportType> = await api.post(
      `/transport/types/create`,
      {
        name,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllTransportTypes = async () => {
  try {
    const response: AxiosResponse<ITransportType[]> = await api.get(
      `/transport/types/all`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTransportType = async (id: string) => {
  try {
    const response: AxiosResponse<ITransportType> = await api.delete(
      `/transport/types/${id}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
