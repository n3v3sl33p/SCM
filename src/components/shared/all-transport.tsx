import { ITransport } from "@/models/ITransport";
import { getAllTransport } from "@/services/transport";
import { useInterval } from "@reactuses/core";
import { useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "@/constants/transport-coluns";
interface Props {
  className?: string;
}

const AllTransport: React.FC<Props> = ({ className }) => {
  const [items, setItems] = useState<ITransport[]>([]);
  useInterval(async () => {
    try {
      const response = await getAllTransport();
      console.log(response);
      setItems(response);
    } catch (error) {
      console.log(error);
    }
  }, 2000);

  return (
    <div className="mt-5">
      <h2 className="text-3xl ">Весь транспорт</h2>
      <DataTable data={items} isAdmin columns={columns} filter="regNumber" />
    </div>
  );
};
export default AllTransport;
