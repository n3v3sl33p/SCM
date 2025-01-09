import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ITransport } from "@/models/ITransport";
import { deleteTransport } from "@/services/transport";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";

export const columns: ColumnDef<ITransport>[] = [
  {
    accessorKey: "transportType",
    header: "Тип",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("transportType")}</div>
    ),
  },
  {
    accessorKey: "regNumber",
    header: "Номер",
    cell: ({ row }) => <div>{row.getValue("regNumber")}</div>,
  },
  {
    accessorKey: "volume",
    header: ({ column }) => (
      <div className="text-right">
        <Button
          className="p-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <p>Грузоподъемность</p>
          <ArrowUpDown />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("volume")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const transport = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Функции</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(transport.id)}
            >
              Копировать ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
                toast.promise(deleteTransport(transport.id), {
                  loading: "Удаляем... ",
                  success: "Транспорт удален",
                  error: "ОШИБКА ПРИ УДАЛЕНИИ ТРАНСПОРТА",
                });
              }}
            >
              <span className="text-red-500">Удалить</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
