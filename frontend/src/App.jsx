import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import EventRegisteration from "./pages/event/registeration/EventRegisteration";
import Events from "./pages/user/events/Events";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <Navigate to={`/pages/user/${authUser?.username}`} />
            ) : (
              <Navigate to={"/pages/login"} />
            )
          }
        />
        <Route
          path="/pages"
          element={
            authUser ? (
              <Navigate to={`/pages/user/${authUser?.username}`} />
            ) : (
              <Navigate to={"/pages/login"} />
            )
          }
        />
        <Route
          path="/pages/user/:username"
          element={authUser ? <User /> : <Navigate to={"/pages/login"} />}
        />
        <Route
          path="/pages/user"
          element={
            authUser ? (
              <Navigate to={`/pages/user/${authUser?.username}`} />
            ) : (
              <Navigate to={"/pages/login"} />
            )
          }
        />
        <Route
          path="/pages/login"
          element={
            authUser ? (
              <Navigate to={`/pages/user/${authUser?.username}`} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/pages/signup"
          element={
            authUser ? (
              <Navigate to={`/pages/user/${authUser?.username}`} />
            ) : (
              <SignUp />
            )
          }
        />
        <Route
          path="/pages/event/registeration"
          element={
            authUser ? <EventRegisteration /> : <Navigate to={"/pages/login"} />
          }
        />
        <Route
          path="/pages/user/events"
          element={authUser ? <Events /> : <Navigate to={"/pages/login"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
