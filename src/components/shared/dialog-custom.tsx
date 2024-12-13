import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DialogCustomProps {
  children: React.ReactNode;
  onClick?: () => void;
  header?: string;
  description?: string;
  buttonText?: string;
}
export const DialogCustom: React.FC<DialogCustomProps> = ({
  children,
  onClick,
  header,
  description,
  buttonText,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        {description}
        <DialogFooter>
          <Button variant={"destructive"} onClick={onClick}>
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DialogCustom;