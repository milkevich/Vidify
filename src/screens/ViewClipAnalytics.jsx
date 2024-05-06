import AutoLayoutVertical from "../components/AutoLayoutVertical";
import AnalyticsContainer from "../components/AnalyticsContainer";
import styles from "./DarkViewClipAnalytics.module.css";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const ViewClipAnalytics = () => {
  const [overviewShown, setOverviewShown] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>  {
      setLoading(false)
    }, 1000);
  })

  const toggleOverview = () => {
    setOverviewShown(!overviewShown);
  };

  return (
    <div className={styles.darkViewClipAnalytics}>
          {loading && <Loader/>  }
      <section className={styles.autoLayoutVerticalWrapper}>
        <AutoLayoutVertical
          overviewShown={overviewShown}
          toggleOverview={toggleOverview}
        />
      </section>
      {overviewShown ?
        <div className={styles.overviewContainer}>
          <div className={styles.overviewContent}>
            <h3 className={styles.overview}>Overview</h3>
            <div className={styles.autoLayoutVertical}></div>
          </div>
          <div className={styles.overviewTextContainer}>
              <ul >
                <li >
                  Excellent shoulders rotation ! You have a similar shoulders rotation as the reference
                </li>
                <li >
                  Excellent foot movement ! You have a similiar foot work as the reference !
                </li>
                <li>
                  Improve your hips motion by increasing your rotation speed !
                </li>
              </ul>
            </div>
        </div>
        :
        <AnalyticsContainer />
      }
    </div>
  );
};

export default ViewClipAnalytics;
