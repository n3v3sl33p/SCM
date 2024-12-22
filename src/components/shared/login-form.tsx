import { FieldValues, SubmitHandler } from "react-hook-form";
import Field from "./field";
import { Form } from "@/components/ui/form";
import { LoginSchema } from "@/constants/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "@/services/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Field
          control={form.control}
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
            control={form.control}
            label="Пароль"
            placeholder="Пароль"
            name="password"
            inputType={showPassword ? "text" : "password"}
          />
        </div>
        <Button type="submit">Войти</Button>
      </form>
    </Form>
  );
};
