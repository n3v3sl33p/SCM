import { z } from "zod";
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Это поле обязательно",
    })
    .email({
      message: "Некорректный email",
    }),
  password: z.string().min(1, {
    message: "Пароль обязателен",
  }),
});
