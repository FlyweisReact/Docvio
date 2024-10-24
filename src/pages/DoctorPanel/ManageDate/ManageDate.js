  /** @format */

  import styles from "../../../css/modules/Doctor/calender.module.css";
  import { edit_default } from "../../../asset";
  import Calendar from "react-calendar";
  import "react-calendar/dist/Calendar.css";

  const ManageDate = () => {
    return (
      <section className={styles.page_container}>
        <div className={styles.header}>
          <h4 className={styles.heading}>Closed on:</h4>
          <div className={styles.switch_btns}>
            <button className={styles.active}>Week</button>
            <button>This Month</button>
            <button>Year</button>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.item}>
            <h4 className={styles.headline}>12 Sep 2024 </h4>
            <div className={styles.content}>
              <p className={styles.title}>Saturday</p>
              <p className={styles.description}>Weekly Off</p>
            </div>
          </div>
          <div className={styles.item}>
            <h4 className={styles.headline}>12 Sep 2024 </h4>
            <div className={styles.content}>
              <p className={styles.title}>Saturday</p>
              <p className={styles.description}>Weekly Off</p>
            </div>
          </div>
        </div>

        <div className={styles.calender_container}>
          <p className={styles.tag}>Choose Closing date</p>
          <div className={styles.header}>
            <p className={styles.heading}>Mon, Aug 17</p>
            <img src={edit_default} alt="" className={styles.edit} />
          </div>

          <div className="doctor-calendar">
            <Calendar className={"custom-calender"} />
          </div>

          <div className={styles.last_btn}>
            <button>Clear</button>
            <div>
              <button>Cancel</button>
              <button>OK</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default ManageDate;
