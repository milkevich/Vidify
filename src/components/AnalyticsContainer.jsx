import GraphComponent from "./GraphComponent";
import styles from "./AnalyticsContainer.module.css";
import { Canvas } from "@react-three/fiber";

const AnalyticsContainer = () => {

  return (
    <section className={styles.analyticsContainer}>
      <div className={styles.analyticsStructure}>
        <div className={styles.analyticsNavigation}>
          <Canvas style={{ width: "100%", height: "200px", backgroundColor: "var(--dark-dark-3)", borderRadius: "var(--br-xs)" }}>
            
          </Canvas>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigationRightContent}>
            <div className={styles.autoLayoutVertical}></div>
            <h3 className={styles.analytics}>Analytics</h3>
            <div className={styles.autoLayoutHorizontal1}>
              <GraphComponent />
              <GraphComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsContainer;
