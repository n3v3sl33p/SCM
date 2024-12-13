import { IUser } from "@/models/IUser";
import { getAllUsers } from "@/services/user";
import { useEffect, useState } from "react";
import UserCard from "./user-card";

const AllUsers = ({}) => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);
  return (
    <div>
      <h2 className="text-3xl mb-5">Пользователи</h2>
      <div className="grid grid-cols-2 gap-16">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
