import { useState } from "react";
import { DataTable } from "./data-table";
import { ITransport } from "@/models/ITransport";
import { useInterval } from "@reactuses/core";
import { getTransportsByUserId } from "@/services/transport";
import { useUserStore } from "@/store/useUserStore";

const UserTransports = () => {
  const currentUser = useUserStore((state) => state.user);
  const [transports, setTransports] = useState<ITransport[]>([]);
  useInterval(async () => {
    if (!currentUser) return;
    try {
      const response = await getTransportsByUserId(currentUser.id);
      setTransports(response);
    } catch (error) {
      console.log(error);
    }
  }, 2000);
  return (
    <div>
      <h2 className="text-3xl">Ваш транспорт</h2>
      <DataTable data={transports} />
    </div>
  );
};

export default UserTransports;
