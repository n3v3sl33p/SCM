import { z } from "zod";
export const RegSchema = z.object({
  firstName: z.string().min(1, {
    message: "Это поле обязательно",
  }),
  secondName: z.string().min(1, {
    message: "Это поле обязательно",
  }),
  patronymic: z.string().min(1, {
    message: "Это поле обязательно",
  }),
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
