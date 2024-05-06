import { useNavigate } from "react-router-dom";
import ElementsVideo from "../components/ElementsVideo";
import styles from "./Sessions.module.css";

const DarkSessions = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.darkSessions}>
      <main className={styles.autoLayoutVertical}>
        <div className={styles.navbardefaultDarktrueCom}>
          <div className={styles.autoLayoutHorizontal}>
            <img
              className={styles.iconlyregularoutlinearrow}
              loading="lazy"
              alt=""
              src="/iconlyregularoutlinearrow--left.svg"
              onClick={() => {
                navigate(-1)
              }}
            />
          </div>
          <b className={styles.titleSection}>June 16th 2024</b>
        </div>
        <section className={styles.autoLayoutVertical1}>
          <div onClick={() => {
            navigate('/41-view-clip-analytics/')
            // pass video data (id, etc) later on
          }}>
            <ElementsVideo />
            <img
              className={styles.darktrueComponentdividerIcon}
              loading="lazy"
              alt=""
              src="/darktrue-componentdivider.svg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DarkSessions;
