import { useState } from "react";
import SelectCustom from "./select-custom";
import { DataTable } from "./data-table";
import { columns } from "@/constants/item-columns";
interface Props {
  className?: string;
}

const WAREHOUSES = [
  {
    id: "1",
    name: "Склад 1",
    companyId: "1",
    coords: "55.755826, 37.6173",
    address: "г. Москва, ул. Пушкинская, д. 1",
    items: [
      {
        id: "1",
        name: "Товар 1",
        volume: "10",
        quantity: "10",
        isFragile: false,
      },
      {
        id: "2",
        name: "Товар 2",
        volume: "10",
        quantity: "10",
        isFragile: false,
      },
    ],
    transportIds: ["1", "2"],
    userIds: ["1", "2"],
  },
];

export const WarehouseInfo: React.FC<Props> = ({ className }) => {
  const [selected, setSelected] = useState("1");
  return (
    <div className={className}>
      <h1>Склад</h1>
      {/* <SelectCustom setSelected={setSelected} items={WAREHOUSES} /> */}
      <DataTable data={WAREHOUSES[0].items} columns={columns} filter="name" />
    </div>
  );
};
