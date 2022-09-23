import { useContext, useEffect, useState } from "react";
import { CardComponentDefault } from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";
import { EventServices } from "src/services/EventServices";

export function ListEventPage() {
  const { user, setUser } = useContext(UserContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await EventServices.getEventByParameter("email", user.email);
    setEvents(res);
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {events.map((el, idx) => {
          return <CardComponentDefault key={idx} data={el} />;
        })}
      </div>
    </>
  );
}
