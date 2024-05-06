import { useMemo } from "react";
import styles from "./ElementsRecent.module.css";

const ElementsRecent = ({
  title,
  frame,
  title1,
  frame1,
  howToBoostYourProducti,
  propMinWidth,
  onFrameImageClick,
}) => {
  const titleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.elementsrecentDarktrueCo}>
      <div className={styles.elementssection1Darktrue}>
        <b className={styles.title} style={titleStyle}>
          {title}
        </b>
        <b className={styles.viewAll}>View All</b>
        <img
          className={styles.iconlyregularoutlinearrow}
          loading="lazy"
          alt=""
          src="/iconlyregularoutlinearrow--right.svg"
        />
        <img
          className={styles.iconlyregularoutlinearrow1}
          alt=""
          src="/iconlyregularoutlinearrow--right.svg"
        />
      </div>
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.ratio169SizemediumDar}>
          <img
            className={styles.frameIcon}
            alt=""
            src={frame}
            onClick={onFrameImageClick}
          />
          <b className={styles.title1}>{title1}</b>
        </div>
        <div className={styles.ratio169SizemediumDar1}>
          <img
            className={styles.frameIcon1}
            loading="lazy"
            alt=""
            src={frame1}
          />
          <b className={styles.howToBoost}>{howToBoostYourProducti}</b>
        </div>
      </div>
    </div>
  );
};

export default ElementsRecent;
