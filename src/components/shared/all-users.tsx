import { IUser } from "@/models/IUser";
import { getAllUsers } from "@/services/user";
import { useState } from "react";
import UserCard from "./user-card";
import { useInterval } from "@reactuses/core";

const AllUsers = ({}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  useInterval(async () => {
    try {
      const response = await getAllUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }, 2000);
  return (
    <div>
      <h2 className="text-3xl mb-5">Пользователи</h2>
      <div className="grid grid-cols-2 gap-16">
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
