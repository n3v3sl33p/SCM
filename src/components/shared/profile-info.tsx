import { useUserStore } from "@/store/useUserStore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { changeUserData } from "@/services/user";
import toast from "react-hot-toast";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const ProfileInfo: React.FC<Props> = ({ className }) => {
  const [canChange, setCanChange] = useState(false);
  const user = useUserStore((state) => state.user);
  const fetchUser = useUserStore((state) => state.fetchUser);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      await fetchUser();
    };
    loadUserData();
  }, [fetchUser]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPatronymic(user.patronymic);
    }
  }, [user]);

  //TODO add skeleton loading
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="text-3xl mb-5">Личные данные</h2>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 bg-zinc-100 rounded-md p-5 max-w-xl"
        )}
      >
        <div>
          <Label>Имя</Label>
          <Input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            readOnly={!canChange}
          />
        </div>
        <div>
          <Label>Фамилия</Label>
          <Input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            readOnly={!canChange}
          />
        </div>
        <div>
          <Label>Отчество</Label>
          <Input
            type="text"
            id="patronymic"
            value={patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
            readOnly={!canChange}
          />
        </div>
        <div>
          <Label>Почта</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!canChange}
          />
        </div>
        <div>
          <Label>Пароль</Label>
          <div className="relative">
            {showPassword ? (
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer right-0 absolute translate-y-2 mr-1"
              />
            ) : (
              <EyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer right-0 absolute translate-y-2 mr-1"
              />
            )}
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              readOnly={!canChange}
            />
          </div>
        </div>
        {canChange && (
          <Button
            className="mt-6"
            onClick={() => {
              setCanChange(!canChange);
              if (
                email !== user.email ||
                firstName !== user.firstName ||
                lastName !== user.lastName ||
                patronymic !== user.patronymic ||
                password
              ) {
                try {
                  const response = changeUserData({
                    id: user.id,
                    firstName,
                    lastName,
                    patronymic,
                    email,
                    password,
                    role: "USER",
                  });
                  toast.promise(response, {
                    loading: "Сохраняем данные...",
                    success: "Данные сохранены успешно",
                    error: "ОШИБКА ПРИ СОХРАНЕНИИ ДАННЫХ",
                  });
                } catch (error) {
                  console.log(error);
                }
              }
            }}
          >
            Сохранить
          </Button>
        )}
        {!canChange && (
          <Button
            className="mt-6"
            onClick={() => {
              setCanChange(!canChange);
            }}
          >
            Редактировать
          </Button>
        )}
      </div>
    </>
  );
};
