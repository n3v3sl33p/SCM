import { AddCarSchema } from "@/constants/add-car-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Field from "./field";
import { Button } from "../ui/button";
import { addCar } from "@/services/user";
import toast from "react-hot-toast";

const AddCar = () => {
  const form = useForm<z.infer<typeof AddCarSchema>>({
    resolver: zodResolver(AddCarSchema),
    defaultValues: {
      userId: "",
      transportId: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      toast.promise(addCar(data.userId, data.transportId), {
        loading: "Добавление...",
        success: "Транспорт добавлен",
        error: "Транспорт не добавлен",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 max-w-xl">
      <h2 className="text-3xl">Добавить транспорт пользователю</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Field
            control={form.control}
            label="Пользователь"
            placeholder="ID Пользователя"
            name="userId"
          />
          <Field
            control={form.control}
            label="Транспорт"
            placeholder="ID Транспорта"
            name="transportId"
          />
          <Button className="mt-2">Добавить</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddCar;
