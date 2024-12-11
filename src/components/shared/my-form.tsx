import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

interface Props {
  title?: string;
  buttonText: string;
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
}

export const MyForm: React.FC<Props> = ({ buttonText, onSubmit, children }) => {
  const form = useFormContext();
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (e) => console.log(e))}
          className="space-y-6"
        >
          {children}
          <Button type="submit">{buttonText}</Button>
        </form>
      </Form>
    </>
  );
};
