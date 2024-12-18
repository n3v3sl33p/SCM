import { useState } from "react";
import SelectCustom from "./select-custom";
import { Button } from "../ui/button";
import { createTrasportType } from "@/services/transport";
import toast from "react-hot-toast";
import AllTransportTypes from "./all-transport-types";

const CreateTransportType = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      aboba
      <SelectCustom setSelected={setSelected} />
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
