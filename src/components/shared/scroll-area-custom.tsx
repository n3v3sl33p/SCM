import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { ITransportType } from "@/models/ITransportType";
import DialogCustom from "./dialog-custom";
import { deleteTransportType } from "@/services/transport";
import toast from "react-hot-toast";

interface Props {
  items: ITransportType[];
}

export const ScrollAreaCustom: React.FC<Props> = ({ items }) => {
  return (
    <ScrollArea className="h-72 w-60 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-xl font-medium leading-none">
          Типы транспорта
        </h4>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <span className="text-xl">{item.name}</span>
              <DialogCustom
                header="Удалить тип транспорта"
                buttonText="Удалить"
                description="Вы точно хотите удалить тип транспорта?"
                onClick={() => {
                  try {
                    const response = deleteTransportType(item.id);
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
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
