import { IUser } from "@/models/IUser";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import DialogCustom from "./dialog-custom";
import { deleteUser } from "@/services/user";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/useUserStore";

interface UserCardProps {
  user: IUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const currentUser = useUserStore((state) => state.user);
  return (
    <div className="grid grid-cols-2 gap-3 bg-zinc-100 rounded-md p-5 max-w-xl">
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
              console.log(user.id);
              const response = deleteUser(user.id);
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
  );
};

export default UserCard;
