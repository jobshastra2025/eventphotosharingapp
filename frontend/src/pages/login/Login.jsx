import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Footer from "../../components/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (<>
  <main className=" flex flex-col items-center justify-between">
    <div className="flex flex-row items-center justify-between mx-auto mt-20 mb-10 w-full max-w-[1440px]">
      <div className="flex flex-col items-center justify-center min-w-[300px] max-w-96 mx-auto  space-y-3">
        <span className="text-[#FE505A]  text-4xl font-bold text-center">
          Photo Sharing App
        </span>
        <div className="w-full px-6 py-4 rounded-lg shadow-2xl shadow-slate-600 bg-white">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-center text-black/40">
              Login
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-black/70">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter User Name"
                className="w-full input input-bordered bg-transparent border-slate-400 rounded-md h-12"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-black/70">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered bg-transparent border-slate-400 h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm text-black/70 hover:underline hover:text-[#FE505A] mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <div className="block">
              <button
                type="submit"
                className=" bg-[#FE505A] text-white   w-full  py-3 rounded-md mt-2 "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner "></span>
                ) : (
                  "Login"
                )}
              </button>
              <button
                type="reset"
                className="btn text-[#FE505A] border-[#FE505A] bg-transparent hover:border-none hover:bg-[#FE505A] hover:text-white
						 btn-block  btn-outline mt-2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex  lg:w-3/5 lg:flex-row lg:items-center lg:justify-end">
        <img src="../2.png"  />
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
};
export default Login;
