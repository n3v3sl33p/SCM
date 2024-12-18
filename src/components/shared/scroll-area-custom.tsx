import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { ITransportType } from "@/models/ITransportType";

interface Props {
  items: ITransportType[];
}

export const ScrollAreaCustom: React.FC<Props> = ({ items }) => {
  console.log(items);
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
              <Button size={"sm"} variant={"destructive"}>
                Удалить
              </Button>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
