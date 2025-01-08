import api from "@/axios-config";
import { ITransport } from "@/models/ITransport";
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

export const createTransport = async (data: ITransport) => {
  try {
    const response: AxiosResponse<ITransport> = await api.post(
      `/transport/create`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllTransport = async () => {
  try {
    const response: AxiosResponse<ITransport[]> = await api.get(
      "/transport/all"
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTransport = async (id: string) => {
  try {
    const response: AxiosResponse<ITransport> = await api.delete(
      `/transport/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTransportsByUserId = async (id: string) => {
  try {
    const response: AxiosResponse<ITransport[]> = await api.get(
      `/transport/all/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
