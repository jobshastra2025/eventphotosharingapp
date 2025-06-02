import MainLayout from "../../../components/MainLayout";
import useGetUserEvents from "../../../hooks/useGetUserEvents";


const Events = () => {
  const { userEvents } = useGetUserEvents();
  console.log(userEvents);
  return (
    <>
      <MainLayout>
      <main className="h-20">user events page</main>
      </MainLayout>
    </>
  );
};

export default Events;
