import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ActiveMenuHomeDarkTrueC from "../components/ActiveMenuHomeDarkTrueC";
import styles from "./DarkHome.module.css";

const DarkHome = () => {
  return (
    <div className={styles.darkHome}>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.frameParent}>
        <FrameComponent />
        <ActiveMenuHomeDarkTrueC />
      </section>
      <div className={styles.typestatusBarThemedarkC}>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        <img className={styles.groupIcon1} alt="" src="/group-1@2x.png" />
        <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
        <div className={styles.div}>9:41</div>
      </div>
    </div>
  );
};

export default DarkHome;
