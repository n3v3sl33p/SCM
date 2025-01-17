import { CustomTrigger } from "@/components/shared/custom-trigger";
import Map from "@/components/shared/Map";

import { ProfileInfo } from "@/components/shared/profile-info";
import { AppSidebar } from "@/components/shared/sidebar";
import UserTransports from "@/components/shared/user-transports";
import { WarehouseInfo } from "@/components/shared/warehouse-info";
import { SidebarProvider } from "@/components/ui/sidebar";
import { User, Warehouse, BookText } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
}

const MenuItems = [
  {
    title: "Личне данные",
    icon: BookText,
  },
  {
    title: "Мой склад",
    icon: Warehouse,
  },
  {
    title: "Карта",
    icon: User,
  },
  {
    title: "Транспорт",
    icon: User,
  },
];
const HomePageUser: React.FC<Props> = ({ className }) => {
  const [selected, setSelected] = useState(0);

  return (
    <SidebarProvider>
      <AppSidebar
        items={MenuItems}
        selected={selected}
        setSelected={setSelected}
      />
      <CustomTrigger />
      <div className="m-4 flex-1 px-20">
        {selected === 0 && <ProfileInfo />}
        {selected === 1 && <WarehouseInfo />}
        {selected === 2 && (
          <div>
            <Map />
          </div>
        )}
        {selected === 3 && <UserTransports />}
      </div>
    </SidebarProvider>
  );
};
export default HomePageUser;
