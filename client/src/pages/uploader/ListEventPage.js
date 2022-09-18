import { CardEvent } from "../../components/CardComponent";
export default function ListEventPage() {
  return (
    <>
      <h1 className="px-5 py-5 text-2xl font-bold">List Event Page</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <CardEvent
              title="OB Dynamic 2022"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
              eventImage="https://pbs.twimg.com/media/FHvfqCaUYAU8iM0?format=jpg&name=large"
              userJoined="100"
            />

            <CardEvent
              title="OB Dynamic 2022"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
              eventImage="https://pbs.twimg.com/media/FHvfqCaUYAU8iM0?format=jpg&name=large"
              userJoined="100"
            />

            <CardEvent
              title="OB Dynamic 2022"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
              eventImage="https://pbs.twimg.com/media/FHvfqCaUYAU8iM0?format=jpg&name=large"
              userJoined="100"
            />

            <CardEvent
              title="OB Dynamic 2022"
              content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
              eventImage="https://pbs.twimg.com/media/FHvfqCaUYAU8iM0?format=jpg&name=large"
              userJoined="100"
            />
          </div>
        </div>
      </section>
    </>
  );
}
