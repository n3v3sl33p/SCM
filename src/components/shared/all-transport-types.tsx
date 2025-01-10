import { ScrollAreaCustom } from "./scroll-area-custom";
import { ITransportType } from "@/models/ITransportType";
import { getAllTransportTypes } from "@/services/transport";
import { useInterval } from "@reactuses/core";
import { useState } from "react";

interface Props {
  className?: string;
}
const AllTransportTypes: React.FC<Props> = ({ className }) => {
  const [items, setItems] = useState<ITransportType[]>([]);

  useInterval(async () => {
    try {
      const response = await getAllTransportTypes();
      setItems(response);
    } catch (error) {
      console.log(error);
    }
  }, 2000);
  return (
    <div className="mt-5">
      <ScrollAreaCustom items={items} />
    </div>
  );
};

export default AllTransportTypes;
