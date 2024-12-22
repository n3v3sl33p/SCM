import { ITransportType } from "@/models/ITransportType";
import { Button } from "../ui/button";
import DialogCustom from "./dialog-custom";
import { deleteTransportType } from "@/services/transport";
import toast from "react-hot-toast";

interface Props {
  type: ITransportType;
}

const TransportTypeCard: React.FC<Props> = ({ type }) => {
  return (
    <div className="mt-2 flex items-center justify-between">
      <span className="text-xl">{type.name}</span>
      <DialogCustom
        header="Удалить тип транспорта"
        buttonText="Удалить"
        description="Вы точно хотите удалить тип транспорта?"
        onClick={() => {
          try {
            const response = deleteTransportType(type.id);
            toast.promise(response, {
              loading: "Удаляем... ",
              success: "Тип транспорта удален",
              error: "ОШИБКА ПРИ УДАЛЕНИИ ТИПА ТРАНСПОРТА",
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Button size={"sm"} variant={"destructive"}>
          Удалить
        </Button>
      </DialogCustom>
    </div>
  );
};

export default TransportTypeCard;
