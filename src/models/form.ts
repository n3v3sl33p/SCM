import { UseFormReturn } from "react-hook-form";

export interface ILoginForm {
  form: UseFormReturn<
    {
      email: string;
      password: string;
    },
    any,
    undefined
  >;
}
