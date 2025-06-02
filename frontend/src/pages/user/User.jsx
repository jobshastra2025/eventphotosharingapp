import MainLayout from "../../components/MainLayout";
import { useAuthContext } from "../../context/AuthContext";
const User = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  
  return (
    <MainLayout>
    <main className="h-20">

    </main>
    </MainLayout>
    
  );
};

export default User;
