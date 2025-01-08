import { useState } from "react";
import SelectCustom from "./select-custom";
import { Button } from "../ui/button";
import { createTrasportType } from "@/services/transport";
import toast from "react-hot-toast";
import AllTransportTypes from "./all-transport-types";

const items = [
  {
    name: "Cамолет",
    id: "Самолет",
  },
  {
    name: "Грузовик",
    id: "Грузовик",
  },
  {
    name: "Газель",
    id: "Газель",
  },
];

const CreateTransportType = () => {
  const [selected, setSelected] = useState("");
  console.log(selected);

  return (
    <div>
      Тип транспорта
      <SelectCustom setSelected={setSelected} items={items} />
      <Button
        onClick={() => {
          try {
            const response = createTrasportType(selected);
            toast.promise(response, {
              loading: "Создаем...",
              success: "Тип транспорта создан",
              error: "ОШИБКА ПРИ СОЗДАНИИ ТИПА ТРАНСПОРТА",
            });
          } catch (error) {
            console.log(error);
          }
        }}
        className="mt-4"
      >
        Создать
      </Button>
      <AllTransportTypes className="mt-4" />
    </div>
  );
};

export default CreateTransportType;
