import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import Field from "./field";
import { MyForm } from "./my-form";
import { login } from "@/services/auth";

import toast from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const form = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = login(data.email, data.password).then((res) => {
        localStorage.setItem("token", res?.accessToken || "");
        localStorage.setItem("refresh-token", res?.refreshToken || "");
        navigate("/");
      });
      toast.promise(response, {
        loading: "Авторизируемся...",
        success: "Авторизация прошла успешно",
        error: "ОШИБКА ПРИ АВТОРИЗАЦИИ",
      });
    } catch (error) {
      console.log("ОШИБКА ПРИ АВТОРИЗАЦИИ");
      console.log(error);
    }
  };

  return (
    <MyForm title="Войти в аккаунт" buttonText="Войти" onSubmit={onSubmit}>
      <Field
        formControl={form.control}
        label="Email"
        placeholder="email@mail.com"
        name="email"
      />
      <div className="relative">
        {showPassword ? (
          <Eye
            className="cursor-pointer right-0 absolute translate-y-10 mr-1"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <EyeOff
            className="cursor-pointer right-0 absolute translate-y-10 mr-1"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
        <Field
          formControl={form.control}
          label="Пароль"
          placeholder="Пароль"
          name="password"
          inputType={showPassword ? "text" : "password"}
        />
      </div>
    </MyForm>
  );
};
