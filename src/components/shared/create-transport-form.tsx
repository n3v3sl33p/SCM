import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import Field from "./field";
import { Button } from "../ui/button";
import SelectField from "./select-field";
import { createTransport } from "@/services/transport";
import toast from "react-hot-toast";

interface Props {}

const createTransportSchema = z.object({
  driverId: z.string().min(1, {
    message: "Это поле обязательно",
  }),
  transportTypeId: z.string().min(1, {
    message: "Это поле обязательно",
  }),
  transportRegNumber: z.string().min(1, {
    message: "Это поле обязательно",
  }),
  volume: z.string().min(1, {
    message: "Это поле обязательно",
  }),
});
const handleSubmit: SubmitHandler<FieldValues> = (data) => {
  const transport = {
    driverId: data.driverId,
    transportTypeId: data.transportTypeId,
    transportRegNumber: data.transportRegNumber,
    volume: data.volume,
  };
  try {
    const response = createTransport(transport);
    toast.promise(response, {
      loading: "Создаем...",
      success: "Транспорт создан",
      error: "ОШИБКА ПРИ СОЗДАНИИ ТРАНСПОРТА",
    });
  } catch (error) {
    console.log(error);
  }
};
const CreateTransportForm: React.FC<Props> = ({}) => {
  const form = useForm<z.infer<typeof createTransportSchema>>({
    resolver: zodResolver(createTransportSchema),
    defaultValues: {
      driverId: "",
      transportTypeId: "",
      transportRegNumber: "",
      volume: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Field
          control={form.control}
          label="Водитель"
          placeholder="Водитель"
          name="driverId"
        />
        <SelectField
          control={form.control}
          label="Тип транспорта"
          name="transportTypeId"
          placeholder="Тип транспорта"
        />
        <Field
          control={form.control}
          label="Регистрационный номер"
          placeholder="Регистрационный номер"
          name="transportRegNumber"
        />
        <Field
          control={form.control}
          label="Объем"
          placeholder="Объем"
          name="volume"
        />
        <Button type="submit">Создать</Button>
      </form>
    </Form>
  );
};
export default CreateTransportForm;
