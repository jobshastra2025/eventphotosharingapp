import { useState } from "react";
import useRegister from "../../../hooks/useRegister";
import MainLayout from "../../../components/MainLayout";

const EventRegisteration = () => {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    venue: "",
  });

  const { loading, register } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(inputs);
    setInputs({ name: "", description: "", venue: "" });
  };

  return (
    <MainLayout>
    <main className=" flex flex-col items-center justify-between">
    <div className="flex flex-row items-center justify-between w-full max-w-[1440px] mx-auto mt-20 mb-10">
      <div className="flex flex-col items-center justify-center min-w-[300px] max-w-[500px] mx-auto  space-y-3">
        <span className="text-[#FE505A]  text-4xl font-bold text-center">
          Photo Sharing App
        </span>
        <div className="w-full px-6 py-4 rounded-lg shadow-2xl shadow-slate-600 bg-white">
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl font-semibold text-center text-black/40">
              Register Event
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-black/70">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full input input-bordered px-2 bg-transparent border-slate-400 rounded-md h-12"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-black/70">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Enter Description"
                className="w-full input input-bordered px-2 bg-transparent border-slate-400 rounded-md h-20 resize-none"
                value={inputs.description}
                onChange={(e) =>
                  setInputs({ ...inputs, description: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-black/70">
                  Venue
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Venue"
                className="w-full input input-bordered px-2 bg-transparent border-slate-400 rounded-md h-12"
                value={inputs.venue}
                onChange={(e) =>
                  setInputs({ ...inputs, venue: e.target.value })
                }
              />
            </div>

            <div className="block">
              <button
                className=" bg-[#FE505A] text-white   w-full  py-3 rounded-md mt-2 "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner "></span>
                ) : (
                  "Register"
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
        <img src="../../2.png" />
      </div>
    </div>
    </main>
    </MainLayout>
  );
};
export default EventRegisteration;
