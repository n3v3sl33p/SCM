import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectCustom: React.FC<Props> = ({ setSelected }) => {
  return (
    <Select
      onValueChange={(value) => {
        setSelected(value);
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Выберите тип транспорта" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="jiguli">Жигули</SelectItem>
          <SelectItem value="gruzovik">Грузовик МАН</SelectItem>
          <SelectItem value="kamaz">Камаз(для нищих)</SelectItem>
          <SelectItem value="gazelle">Газель Жорика</SelectItem>
          <SelectItem value="courier">Курьер пешком</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectCustom;
