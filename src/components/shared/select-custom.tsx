import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ITransportType } from "@/models/ITransportType";

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  items: ITransportType[];
  placeholder?: string;
}

export const SelectCustom: React.FC<Props> = ({
  setSelected,
  items,
  placeholder,
}) => {
  return (
    <Select
      onValueChange={(value) => {
        setSelected(value);
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item, index) => (
            <SelectItem key={index} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectCustom;
