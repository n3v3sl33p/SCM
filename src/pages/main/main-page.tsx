import { CustomTrigger } from "@/components/shared/custom-trigger";
import Map from "@/components/shared/Map";

import { ProfileInfo } from "@/components/shared/profile-info";
import { AppSidebar } from "@/components/shared/sidebar";
import { WarehouseInfo } from "@/components/shared/warehouse-info";
import { SidebarProvider } from "@/components/ui/sidebar";
import { User, Warehouse } from "lucide-react";
import { useState } from "react";

interface Props {
  className?: string;
}

const MenuItems = [
  {
    title: "Профиль",
    icon: User,
  },
  {
    title: "Мой склад",
    icon: Warehouse,
  },
  {
    title: "Карта",
    icon: User,
  },
];
const Home: React.FC<Props> = ({ className }) => {
  const [selected, setSelected] = useState(0);

  return (
    <SidebarProvider>
      <AppSidebar
        items={MenuItems}
        selected={selected}
        setSelected={setSelected}
      />
      <CustomTrigger />
      <div className="m-4">
        {selected === 0 && <ProfileInfo />}
        {selected === 1 && <WarehouseInfo />}
        {selected === 2 && (
          <div>
            <Map />
          </div>
        )}
      </div>
    </SidebarProvider>
  );
};
export default Home;
