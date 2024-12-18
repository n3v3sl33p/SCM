import { ITransportType } from "@/models/ITransportType";
import { Button } from "../ui/button";

interface Props {
  type: ITransportType;
}
const TransportTypeCard: React.FC<Props> = ({ type }) => {
  return (
    <div className="mt-2 flex items-center justify-between">
      <span className="text-xl">{type.name}</span>
      <Button size={"sm"} variant={"destructive"}>
        Удалить
      </Button>
    </div>
  );
};

export default TransportTypeCard;
