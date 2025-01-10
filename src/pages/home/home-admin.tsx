import AllUsers from "@/components/shared/all-users";
import CreateTransportType from "@/components/shared/create-transport-type";
import TransportPage from "@/components/shared/transport-page";
import { CustomTrigger } from "@/components/shared/custom-trigger";
import Map from "@/components/shared/Map";

import { ProfileInfo } from "@/components/shared/profile-info";
import { AppSidebar } from "@/components/shared/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { User, BookText, Car, MapIcon } from "lucide-react";
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
    title: "Карта",
    icon: MapIcon,
  },
  {
    title: "Пользователи",
    icon: User,
  },
  {
    title: "Транспорт",
    icon: Car,
  },
];
const HomePageAdmin: React.FC<Props> = ({ className }) => {
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
        {selected === 1 && (
          <div>
            <Map />
          </div>
        )}
        {selected === 2 && <AllUsers />}
        {selected === 3 && <TransportPage />}
      </div>
    </SidebarProvider>
  );
};
export default HomePageAdmin;
