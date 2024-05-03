import { useCallback } from "react";
import styles from "./ElementsVideoDarkTrueCom.module.css";

const ElementsVideoDarkTrueCom = () => {
  const onElementsVideoDarkTrueComClick = useCallback(() => {
    // Please sync "39_Dark_view clip load" to the project
  }, []);

  return (
    <div className={styles.elementsvideoDarktrueCom}>
      <div
        className={styles.elementsvideoDarktrueCom1}
        onClick={onElementsVideoDarkTrueComClick}
      >
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame2@2x.png"
        />
        <div className={styles.autoLayoutVertical}>
          <b className={styles.title}>clip 17</b>
          <nav className={styles.autoLayoutHorizontal}>
            <div className={styles.service}>Service</div>
            <div className={styles.div}>•</div>
            <div className={styles.date}>Nadal, Alcaraz</div>
          </nav>
        </div>
        <img
          className={styles.iconellipsisVComponentadd}
          loading="lazy"
          alt=""
          src="/iconellipsisv-componentadditional-icons1.svg"
        />
      </div>
    </div>
  );
};

export default ElementsVideoDarkTrueCom;
