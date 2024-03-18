import styles from './EventItem.module.css'
import './styles.css'

const EventItem = (props) => {
  const { images, id, name, info, onEventClick } = props;

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };
  return (
    <div className={styles.eventItemContainer}>
      <img src={images} alt={name} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className="see-more-btn" onClick={handleSeeMoreClick}>Ver mas</button>
      </div>
    </div>
  );
};

export default EventItem;