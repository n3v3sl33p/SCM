import { BASE_URL } from "@/axios-config";
import { AuthResponse } from "@/models/auth-response";
import axios, { AxiosResponse } from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      BASE_URL + "auth/login",
      {
        email,
        password,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  firstName: string,
  lastName: string,
  patronymic: string,
  email: string,
  password: string
) => {
  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(
      BASE_URL + "auth/register",
      {
        firstName,
        lastName,
        patronymic,
        email,
        password,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
