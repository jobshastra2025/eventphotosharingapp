import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import Footer from "../../components/Footer";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (<>
    <main className="flex flex-col items-center justify-between">
    <div className="flex flex-row items-center justify-between w-full max-w-[1440px] mx-auto mt-20 mb-10">
    <div className="flex flex-col items-center justify-center min-w-[300px] max-w-96 mx-auto space-y-3">
        <span className="text-[#FE505A] text-4xl font-bold text-center">
            Photo Sharing App
          </span>
      <div className="w-full px-6 py-4 rounded-lg shadow-2xl bg-white shadow-slate-600">
        
        <div className="flex flex-col items-center  justify-center">
        
          <span className="text-3xl font-semibold text-center text-black/40">
            Sign Up
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label px-2 py-1.5">
              <span className="text-base label-text text-black/70">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Tim Cook"
              className="w-full input input-bordered border-slate-400 bg-transparent h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label px-2 py-1.5 ">
              <span className="text-base label-text text-black/70">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="timcook"
              className="w-full input input-bordered border-slate-400 bg-transparent h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              className="w-full input input-bordered border-slate-400 bg-transparent h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-black/70">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered border-slate-400 bg-transparent h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm text-black/70 hover:underline hover:text-[#FE505A] mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="w-full py-3 rounded-md text-base mt-2 border-none text-white bg-[#FE505A]"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
            <button type="reset" className="btn text-[#FE505A] text-base border border-[#FE505A] hover:text-white hover:bg-[#FE505A] hover:border-none btn-block  btn-outline mt-2">Reset</button>
          </div>
        </form>
      </div>
    </div>
    <div className="hidden xl:flex xl:flex-row xl:items-center xl:justify-end xl:w-3/5">
     <img src="../4.jpg" className="max-w-[600px] max-h-[600px]"/>
    </div>
    </div>
    </main>
    <Footer/>
    </>
  );
};
export default SignUp;

