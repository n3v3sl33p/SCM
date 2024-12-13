import React from "react";
import { LoginForm } from "@/components/shared/login-form";
import { RegForm } from "@/components/shared/reg-form";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/constants/login-schema";
import { RegSchema } from "@/constants/reg-schema";
import { cn } from "@/lib/utils";

export const AuthPage: React.FC = () => {
  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const regForm = useForm<z.infer<typeof RegSchema>>({
    resolver: zodResolver(RegSchema),
    defaultValues: {
      firstName: "",
      secondName: "",
      patronymic: "",
      email: "",
      password: "",
    },
  });

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div>
      <div className="flex w-full text-2xl flex-col mb-5">
        <div className="flex gap-4">
          <button
            className={cn({
              "border-b-2 border-b-primary": isLogin,
            })}
            onClick={() => setIsLogin(true)}
          >
            Войти
          </button>
          <button
            className={cn({
              "border-b-2 border-b-primary": !isLogin,
            })}
            onClick={() => setIsLogin(false)}
          >
            Регистрация
          </button>
        </div>
        <hr className="w-full w" />
      </div>

      {isLogin ? (
        <FormProvider {...loginForm}>
          <LoginForm />
        </FormProvider>
      ) : (
        <FormProvider {...regForm}>
          <RegForm />
        </FormProvider>
      )}
    </div>
  );
};
