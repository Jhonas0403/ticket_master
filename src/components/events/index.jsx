import EventItem from "./components/EventItem";

import useEventsData from "../../hooks/useEventsData";
import { useNavigate } from "react-router-dom";

const Events = ({ searchTerm, events }) => {
  const navigation = useNavigate();
  const handleEventItemClick = (id) => {
    navigation(`/detail/${id}`);
  };
  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm)
      );
    }
    return eventsFiltered.map((item) => {
      return (
        <EventItem
          key={item.id}
          name={item.name}
          info={item.info}
          images={item.images[0].url}
          id={item.id}
          onEventClick={handleEventItemClick}
        />
      );
    });
  };

  return (
    <div>
      eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
