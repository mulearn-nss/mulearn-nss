import { Link } from "react-router-dom";
import styles from "./Events.module.css";
import data from "../../../data.json";

const Events = () => {
  // Limit the smaller cards to 2 items (so 3 total events are displayed on the home page)
  const displayedEvents = data.events.slice(1, 3);

  return (
    <div className={styles.events}>
      <h2>Our Event Journey</h2>
      <div className={styles.innerDiv}>
        <div className={styles.card + " " + styles.large}>
          <div className={styles.content}>
            <div className={styles.date}>
              <span>{data["events"][0].month}</span>
              <span>{data["events"][0].date}</span>
            </div>
            <div className={styles.text}>
              <strong>{data["events"][0].head}</strong>
              <span>{data["events"][0].para}</span>
            </div>
          </div>
          <img src={data["events"][0].img} alt="" />
        </div>
        <div className={styles.subContent}>
          {displayedEvents.map((event, index) => {
            return (
              <div className={styles.card + " " + styles.small} key={index}>
                <div className={styles.content}>
                  <div className={styles.date}>
                    <span>{event.month}</span>
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.text}>
                    <strong>{event.head}</strong>
                    <span>{event.para}</span>
                  </div>
                </div>
                <img src={event.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      {data.events.length > 3 && (
        <Link to="/events" className={styles.viewAllBtn} style={{ textDecoration: 'none', textAlign: 'center', width: 'fit-content' }}>
          View All
        </Link>
      )}
    </div>
  );
};

export default Events;
