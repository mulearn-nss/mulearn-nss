import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AllEvents.module.css";
import data from "../../../data.json";

const AllEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.allEventsContainer}>
      <div className={styles.header}>
        <Link to="/" className={styles.backBtn}>&larr; Back to Home</Link>
        <h2>All Events</h2>
      </div>
      
      <div className={styles.grid}>
        {data.events.map((event, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={event.img} alt={event.head} />
              <div className={styles.dateBadge}>
                <span className={styles.month}>{event.month}</span>
                <span className={styles.day}>{event.date}</span>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <strong>{event.head}</strong>
                <span>{event.para}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
