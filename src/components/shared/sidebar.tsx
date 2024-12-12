import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Logo from "@/assets/scm_logo.svg";
import { ChevronUp, User2 } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  icon: React.ComponentType;
}
interface Props {
  items: MenuItem[];
  selected: number;
  setSelected: (index: number) => void;
}

export const AppSidebar: React.FC<Props> = ({
  items,
  selected,
  setSelected,
}) => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center p-2 gap-5">
              <img src={Logo} alt="logo" className="h-8 w-8" />
              SCM
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={index === selected}
                    onClick={() => setSelected(index)}
                  >
                    <a>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user?.email}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span
                    className="text-red-600"
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("refresh-token");
                      navigate("/auth");
                    }}
                  >
                    Выйти
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
