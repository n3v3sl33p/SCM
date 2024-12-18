import { ScrollAreaCustom } from "./scroll-area-custom";
import { ITransportType } from "@/models/ITransportType";
import { getAllTransportTypes } from "@/services/transport";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}
const AllTransportTypes: React.FC<Props> = ({ className }) => {
  const [items, setItems] = useState<ITransportType[]>([]);
  useEffect(() => {
    const fethTransportTypes = async () => {
      try {
        const response = await getAllTransportTypes();
        setItems(response);
      } catch (error) {
        console.log(error);
      }
    };
    fethTransportTypes();
  }, []);
  return <ScrollAreaCustom items={items} />;
};

export default AllTransportTypes;
