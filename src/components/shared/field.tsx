import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface Props {
  formControl: Control<FieldValues, any>;
  label: string;
  placeholder: string;
  inputType?: string;
  name: "firstName" | "secondName" | "patronymic" | "email" | "password";
}

const Field: React.FC<Props> = ({
  formControl,
  label,
  placeholder,
  name,
  inputType,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={inputType} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Field;
