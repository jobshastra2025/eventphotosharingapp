import useGetUserEvents from "../../../hooks/useGetUserEvents";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Events = () => {
  const { userEvents } = useGetUserEvents();
  console.log(userEvents);
  return (
    <>
      <Header />
      <main className="">user events page</main>
      <Footer/>
    </>
  );
};

export default Events;
