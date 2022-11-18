import { useContext, useEffect, useState } from "react";
import { CardComponentDefault } from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";
import { EventServices } from "src/services/EventServices";

export function ListEventPage() {
  const { user, setUser } = useContext(UserContext);
  const [events, setEvents] = useState([]);

  const eventServices = new EventServices();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await eventServices.getAllByEmail(user.email);
    setEvents(res);
  }

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-12">
        {events.map((el, idx) => {
          return <CardComponentDefault key={idx} data={el} />;
        })}
      </div>
    </>
  );
}
