import { useSidebar } from "@/components/ui/sidebar";
import { ArrowLeftToLine, ArrowRightFromLine } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar();

  return (
    <button onClick={toggleSidebar}>
      {open ? <ArrowLeftToLine /> : <ArrowRightFromLine />}
    </button>
  );
}
