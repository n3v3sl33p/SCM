import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import RegFormField from "./field";
import { register } from "@/services/auth";

import toast from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegSchema } from "@/constants/reg-schema";

export const RegForm = () => {
  const form = useForm<z.infer<typeof RegSchema>>({
    resolver: zodResolver(RegSchema),
    defaultValues: {
      firstName: "",
      secondName: "",
      patronymic: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
        navigate("/");
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, (e) => console.log(e))}
        className="space-y-6"
      >
        <RegFormField
          control={form.control}
          label="Имя"
          placeholder="Иван"
          name="firstName"
        />
        <RegFormField
          control={form.control}
          label="Фамилия"
          placeholder="Иванов"
          name="secondName"
        />
        <RegFormField
          control={form.control}
          label="Отчество"
          placeholder="Иванович"
          name="patronymic"
        />
        <RegFormField
          control={form.control}
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
            control={form.control}
            label="Пароль"
            placeholder="Пароль"
            name="password"
            inputType={showPassword ? "text" : "password"}
          />
        </div>

        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </Form>
  );
};
