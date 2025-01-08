import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import Field from "./field";
import { Button } from "../ui/button";
import SelectField from "./select-field";
import { createTransport } from "@/services/transport";
import toast from "react-hot-toast";
import { ITransport } from "@/models/ITransport";

interface Props {}

const createTransportSchema = z.object({
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
  const transport: ITransport = {
    id: "",
    transportType: data.transportTypeId,
    regNumber: data.transportRegNumber,
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
      transportTypeId: "",
      transportRegNumber: "",
      volume: "",
    },
  });
  return (
    <div className="max-w-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
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
          <Button className="mt-4" type="submit">
            Создать
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateTransportForm;
