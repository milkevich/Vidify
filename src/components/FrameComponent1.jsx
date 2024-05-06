import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ElementsRecentDarkTrueCo from "./ElementsRecent";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onFrameImageClick = useCallback(() => {
    navigate("/23-sessions");
  }, [navigate]);

  return (
    <section className={styles.elementsrecentDarktrueCoWrapper}>
      <ElementsRecentDarkTrueCo
        title="Sessions"
        frame="/frame-1@2x.png"
        title1="June. 16th 2024"
        frame1="/frame-2@2x.png"
        howToBoostYourProducti="June 20th 2024"
        onFrameImageClick={onFrameImageClick}
      />
    </section>
  );
};

export default FrameComponent1;
