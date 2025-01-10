import { useState } from "react";
import SelectCustom from "./select-custom";
import { DataTable } from "./data-table";
import { columns } from "@/constants/item-columns";
interface Props {
  className?: string;
}

export const WAREHOUSES = [
  {
    id: "1",
    name: "Склад 1",
    companyId: "1",
    coords: "47.219771, 38.892479",
    address: "улица Чехова, 265, Таганрог, Ростовская область, 347930",
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
        quantity: "100",
        isFragile: true,
      },
    ],
    transportIds: ["1", "2"],
    userIds: ["1", "2"],
  },
  {
    id: "2",
    name: "Склад 2",
    companyId: "1",
    coords: "47.259256, 38.917596",
    address: "улица Дзержинского, 185, Таганрог, Ростовская область, 347924",
    items: [
      {
        id: "1",
        name: "Товар 1",
        volume: "10",
        quantity: "1000",
        isFragile: false,
      },
      {
        id: "2",
        name: "Товар 2",
        volume: "10",
        quantity: "500",
        isFragile: true,
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
      <SelectCustom
        setSelected={setSelected}
        items={WAREHOUSES}
        placeholder="Выберите склад"
      />
      {selected === "1" && (
        <DataTable data={WAREHOUSES[0].items} columns={columns} filter="name" />
      )}
      {selected === "2" && (
        <DataTable data={WAREHOUSES[1].items} columns={columns} filter="name" />
      )}
    </div>
  );
};
