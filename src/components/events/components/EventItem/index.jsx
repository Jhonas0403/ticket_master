import styles from "./EventItem.module.css";
import "./styles.css";
// import { Link } from "react-router-dom";

import useLikeEvents from "../../../../hooks/useLikeEvents";

const EventItem = (props) => {
  const { images, id, name, info, onEventClick } = props;
  const { isEventLike, toggleEventLike } = useLikeEvents(id);

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  const handlehearthClick = () => {
    toggleEventLike();
  };
  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        <button onClick={handlehearthClick}>
          {" "}
          {isEventLike ? "Like" : "Unlike"}
        </button>
        <img src={images} alt={name} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className="see-more-btn" onClick={handleSeeMoreClick}>
          {/* <Link to={`/detail/${id}`}>Ver mas</Link> */}
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;
