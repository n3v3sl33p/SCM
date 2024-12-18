import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  useForm,
  SubmitHandler,
  FormProvider,
} from "react-hook-form";

import { MyForm } from "./my-form";
import Field from "./field";
interface Props {}

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  console.log(data);
};

const CreateTransportForm: React.FC<Props> = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <FormProvider {...form}>
      <MyForm
        title="Создать транспорт"
        buttonText="Создать"
        onSubmit={onSubmit}
      >
        <Field
          formControl={form.control}
          label="Название"
          placeholder="Название"
          name="firstName"
        />
      </MyForm>
    </FormProvider>
  );
};
export default CreateTransportForm;
