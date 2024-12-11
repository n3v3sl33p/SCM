import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import RegFormField from "./field";
import { MyForm } from "./my-form";
import { register } from "@/services/auth";
import { redirect } from "react-router-dom";

import toast from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const RegForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = register(
        data.firstName,
        data.secondName,
        data.patronymic,
        data.email,
        data.password
      ).then((res) => {
        localStorage.setItem("token", res?.accessToken || "");
        localStorage.setItem("refresh-token", res?.refreshToken || "");
        redirect("/");
      });
      toast.promise(response, {
        loading: "Регистрируемся...",
        success: "Регистрация прошла успешно",
        error: "ОШИБКА ПРИ РЕГИСТРАЦИИ",
      });
    } catch (error) {
      console.log("ОШИБКА ПРИ РЕГИСТРАЦИИ");
    }
  };

  return (
    <MyForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onSubmit={onSubmit}
    >
      <RegFormField
        formControl={form.control}
        label="Имя"
        placeholder="Иван"
        name="firstName"
      />
      <RegFormField
        formControl={form.control}
        label="Фамилия"
        placeholder="Залупенко"
        name="secondName"
      />
      <RegFormField
        formControl={form.control}
        label="Отчество"
        placeholder="Иванович"
        name="patronymic"
      />
      <RegFormField
        formControl={form.control}
        label="Почта"
        placeholder="Почта"
        name="email"
        inputType="email"
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
        <RegFormField
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
