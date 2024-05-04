import { useNavigate } from "react-router-dom";
import ElementsVideoDarkTrueCom from "../components/ElementsVideoDarkTrueCom";
import styles from "./Sessions.module.css";

const DarkSessions = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.darkSessions}>
      <main className={styles.autoLayoutVertical}>
        <div className={styles.navbardefaultDarktrueCom}>
          <div className={styles.autoLayoutHorizontal}>
            <img
              className={styles.typelogoDefaultComponentl}
              alt=""
              src="/typelogo-default-componentlogo.svg"
            />
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
          <div className={styles.autoLayoutHorizontal1}>
            <img
              className={styles.iconlyregularoutlinenotific}
              alt=""
              src="/iconlyregularoutlinenotification@2x.png"
            />
            <img
              className={styles.iconlyregularoutlinenotific1}
              alt=""
              src="/iconlyregularoutlinenotification@2x.png"
            />
            <img
              className={styles.iconlyregularoutlinenotific2}
              alt=""
              src="/iconlyregularoutlinenotification1@2x.png"
            />
          </div>
        </div>
        <section className={styles.autoLayoutVertical1}>
          <ElementsVideoDarkTrueCom />
          <img
            className={styles.darktrueComponentdividerIcon}
            loading="lazy"
            alt=""
            src="/darktrue-componentdivider.svg"
          />
          <div className={styles.elementsvideoDarktrueCom}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-11@2x.png"
            />
            <div className={styles.autoLayoutVertical2}>
              <b className={styles.title}>clip 18</b>
              <div className={styles.autoLayoutHorizontal2}>
                <div className={styles.dotsIcons}>Service</div>
                <div className={styles.div}>•</div>
                <div className={styles.date}>Nadal, Alcaraz</div>
              </div>
            </div>
            <img
              className={styles.iconellipsisVComponentadd}
              loading="lazy"
              alt=""
              src="/iconellipsisv-componentadditional-icons1.svg"
            />
          </div>
          <img
            className={styles.darktrueComponentdividerIcon1}
            loading="lazy"
            alt=""
            src="/darktrue-componentdivider.svg"
          />
          <div className={styles.elementsvideoDarktrueCom1}>
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-21@2x.png"
            />
            <div className={styles.autoLayoutVertical3}>
              <b className={styles.title1}>clip 19</b>
              <div className={styles.autoLayoutHorizontal3}>
                <div className={styles.div1}>right hand</div>
                <div className={styles.div2}>•</div>
                <div className={styles.date1}>Nadal; Federer</div>
              </div>
            </div>
            <img
              className={styles.iconellipsisVComponentadd1}
              loading="lazy"
              alt=""
              src="/iconellipsisv-componentadditional-icons1.svg"
            />
          </div>
          <img
            className={styles.darktrueComponentdividerIcon2}
            loading="lazy"
            alt=""
            src="/darktrue-componentdivider.svg"
          />
          <div className={styles.elementsvideoDarktrueCom2}>
            <img
              className={styles.frameIcon2}
              loading="lazy"
              alt=""
              src="/frame-31@2x.png"
            />
            <div className={styles.autoLayoutVertical4}>
              <b className={styles.title2}>clip 20</b>
              <div className={styles.autoLayoutHorizontal4}>
                <div className={styles.div3}>right hand</div>
                <div className={styles.div4}>•</div>
                <div className={styles.date2}>Nadal, Djoko.</div>
              </div>
            </div>
            <img
              className={styles.iconellipsisVComponentadd2}
              loading="lazy"
              alt=""
              src="/iconellipsisv-componentadditional-icons1.svg"
            />
          </div>
          <img
            className={styles.darktrueComponentdividerIcon3}
            loading="lazy"
            alt=""
            src="/darktrue-componentdivider.svg"
          />
          <div className={styles.elementsvideoDarktrueCom3}>
            <img
              className={styles.frameIcon3}
              loading="lazy"
              alt=""
              src="/frame-41@2x.png"
            />
            <div className={styles.autoLayoutVertical5}>
              <b className={styles.title3}>clip 21</b>
              <div className={styles.autoLayoutHorizontal5}>
                <div className={styles.div5}>back hand</div>
                <div className={styles.div6}>•</div>
                <div className={styles.date3}>Isner</div>
              </div>
            </div>
            <img
              className={styles.iconellipsisVComponentadd3}
              loading="lazy"
              alt=""
              src="/iconellipsisv-componentadditional-icons1.svg"
            />
          </div>
          <img
            className={styles.darktrueComponentdividerIcon4}
            alt=""
            src="/darktrue-componentdivider.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default DarkSessions;
