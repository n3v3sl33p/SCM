import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface Props<T extends FieldValues> {
  control: Control<T>;
  label: string;
  placeholder: string;
  inputType?: string;
  name: Path<T>;
}

const Field = <T extends FieldValues>({
  control,
  label,
  placeholder,
  name,
  inputType,
}: Props<T>) => {
  return (
    <FormField
      control={control}
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
