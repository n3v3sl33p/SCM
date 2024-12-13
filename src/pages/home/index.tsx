import { Layout } from "./layout";
import HomePageUser from "./home-user";
import HomePageAdmin from "./home-admin";
import { useUserStore } from "@/store/useUserStore";
export const Home = () => {
  const user = useUserStore((state) => state.user);
  console.log(user?.role);
  return (
    <Layout>
      {user?.role === "ADMIN" ? <HomePageAdmin /> : <HomePageUser />}
    </Layout>
  );
};

export default Home;
