import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ActiveMenuHome from "../components/ActiveMenuHome";
import styles from "./Home.module.css";

const DarkHome = () => {
  return (
    <div className={styles.darkHome}>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className={styles.frameParent}>
        <FrameComponent />
        <ActiveMenuHome />
      </section>
      <div className={styles.freeSpace}></div>
    </div>
  );
};

export default DarkHome;
