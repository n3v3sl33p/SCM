import { IUser } from "@/models/IUser";
import { getAllUsers } from "@/services/user";
import { useState } from "react";
import UserCard from "./user-card";
import { useInterval } from "@reactuses/core";
import { useUserStore } from "@/store/useUserStore";

const AllUsers = ({}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const currentUser = useUserStore((state) => state.user);
  useInterval(async () => {
    try {
      const response = await getAllUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }, 2000);

  const sortedUsers = () => {
    if (!currentUser) return users;

    return [currentUser, ...users.filter((user) => user.id !== currentUser.id)];
  };

  return (
    <div>
      <h2 className="text-3xl mb-5">Пользователи</h2>
      <div className="grid grid-cols-2 gap-16">
        {sortedUsers().map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
