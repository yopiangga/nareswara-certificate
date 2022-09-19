import { useContext, useState } from "react";
import { CardComponentDefault } from "src/components/CardComponent";
import { InputComponentDefault } from "src/components/InputComponent";
import { UserContext } from "src/context/UserContext";
import { EventServices } from "src/services/EventServices";

export function NewRequestPage() {
  const { user, setUser } = useContext(UserContext);
  const [emailOrganization, setEmailOrganization] = useState(
    "ristekbempens@gmail.com"
  );
  const [events, setEvents] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (emailOrganization != "") {
      getEvents();
    }
  }

  async function getEvents() {
    const res = await EventServices.getEventByParameter(
      "email",
      emailOrganization
    );
    setEvents(res);
  }

  return (
    <>
      <div className="w-11/12 p-12 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">
          Hallo {user?.name} 👋<span className="font-normal"></span>
        </h1>

        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <InputComponentDefault
                id="eventName"
                title="Email Penyelenggara"
                type="email"
                onChange={(val) => setEmailOrganization(val)}
                placeholder="ristekbempens@gmail.com"
                required={true}
                value={emailOrganization}
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-3 pl-5 pr-5 mr-2 mt-1 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md border-indigo-300"
          >
            Cari Acara
          </button>
        </form>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {events.map((el, idx) => {
          return <CardComponentDefault key={idx} data={el} />;
        })}
      </div>
    </>
  );
}
