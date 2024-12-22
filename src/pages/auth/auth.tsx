import React from "react";
import { LoginForm } from "@/components/shared/login-form";
import { RegForm } from "@/components/shared/reg-form";
import { cn } from "@/lib/utils";

export const AuthPage: React.FC = () => {
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

      {isLogin ? <LoginForm /> : <RegForm />}
    </div>
  );
};
