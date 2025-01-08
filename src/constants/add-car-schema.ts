import { z } from "zod";

export const AddCarSchema = z.object({
  userId: z.string().min(1, {
    message: "Это поле обязательно",
  }),
  transportId: z.string().min(1, {
    message: "Это поле обязательно",
  }),
});
