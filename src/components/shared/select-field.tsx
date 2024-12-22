import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import SelectCustom from "./select-custom";
import { useState } from "react";
import { useInterval } from "@reactuses/core";
import { getAllTransportTypes } from "@/services/transport";
import { ITransportType } from "@/models/ITransportType";

interface Props<T extends FieldValues> {
  control: Control<T>;
  label: string;
  placeholder: string;
  inputType?: string;
  name: Path<T>;
}

const SelectField = <T extends FieldValues>({
  control,
  label,
  placeholder,
  name,
  inputType,
}: Props<T>) => {
  const [selected, setSelected] = useState(null);
  const [items, setItems] = useState<ITransportType[]>([]);
  useInterval(async () => {
    const response = await getAllTransportTypes();
    setItems(response);
  }, 2000);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <SelectCustom setSelected={field.onChange} items={items} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
