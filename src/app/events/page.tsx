// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:4000/dashboard");
//   const data = await response.json();
//   return {
//     props: {
//       eventList: data,
//     },
//   };
// }

export default function EventsPage({ eventList }: { eventList: any }) {
  return (
    <div>
      <h2>Events</h2>
      {/* {eventList.map((event: any) => {
        return (
          <div key={event.id}>
            <h3>{event.title}</h3>
          </div>
        );
      })} */}
    </div>
  );
}
