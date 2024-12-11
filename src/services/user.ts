import api from "@/axios-config";
import { IUser } from "@/models/IUser";
import { AxiosResponse } from "axios";

export const getUserData = async () => {
  try {
    const response: AxiosResponse<IUser> = await api.get("/users/current");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changeUserData = async (data: IUser) => {
  try {
    const response: AxiosResponse<IUser> = await api.put(
      `/users/users/${data.id}`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        patronymic: data.patronymic,
        email: data.email,
        role: "USER",
        password: data.password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
