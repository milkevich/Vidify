import ElementsRecentDarkTrueCo from "./ElementsRecent";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.elementstemplatesDarktrueWrapper}>
      <ElementsRecentDarkTrueCo
        title="Highlights"
        frame="/frame-3@2x.png"
        title1="General perfs"
        frame1="/frame-4@2x.png"
        howToBoostYourProducti="To improve"
        propMinWidth="85px"
      />
    </div>
  );
};

export default FrameComponent;
