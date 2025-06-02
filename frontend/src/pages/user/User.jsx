import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";
const User = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  const {loading,logout}=useLogout();
  return (
    
    <main className="flex flex-col items-center justify-start  h-screen">
      <div className="w-full p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex flex-row items-center justify-end">
          <button onClick={logout} disabled={loading} className=" text-white  rounded-md px-2 py-1 bg-[#BF2E3E]">
            Log out
          </button>
        </div>
      </div>
    </main>
    
  );
};

export default User;
