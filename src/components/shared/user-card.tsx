import { IUser } from "@/models/IUser";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import DialogCustom from "./dialog-custom";
import { deleteUser } from "@/services/user";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/useUserStore";
import { Copy } from "lucide-react";

interface UserCardProps {
  user: IUser;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const UserCard: React.FC<UserCardProps> = ({ user, setUsers }) => {
  const currentUser = useUserStore((state) => state.user);
  return (
    <div className="bg-zinc-100 rounded-md p-5 max-w-xl">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label>Имя</Label>
          <Input readOnly value={user.firstName} />
        </div>
        <div>
          <Label>Фамилия</Label>
          <Input readOnly value={user.lastName} />
        </div>
        <div>
          <Label>Отчество</Label>
          <Input readOnly value={user.patronymic} />
        </div>
        <div>
          <Label>Почта</Label>
          <Input readOnly value={user.email} />
        </div>
        <div>
          <Label>Роль</Label>
          <Input readOnly value={user.role} />
        </div>
        {user.id !== currentUser?.id && (
          <DialogCustom
            header="Удалить пользователя"
            buttonText="Удалить"
            description="Вы точно хотите удалить пользователя?"
            onClick={() => {
              try {
                const response = deleteUser(user.id).then(() => {
                  setUsers((users) => users.filter((u) => u.id !== user.id));
                });
                toast.promise(response, {
                  loading: "Удаление...",
                  success: "Пользователь успешно удален",
                  error: "Ошибка при удалении",
                });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <Button variant={"destructive"} className="mt-6">
              Удалить
            </Button>
          </DialogCustom>
        )}
      </div>
      <hr className="mt-4" />
      <span>ID: {user.id}</span>
      <Button
        variant={"ghost"}
        onClick={() => navigator.clipboard.writeText(user.id)}
      >
        <Copy className="mr-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default UserCard;
