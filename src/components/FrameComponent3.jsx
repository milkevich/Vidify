import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <header className={styles.elementshomeNavbarDarktruWrapper}>
      <div className={styles.elementshomeNavbarDarktru}>
        <div className={styles.autoLayoutHorizontal}>
          <img
            className={styles.typedefaultComponentavatarIcon}
            loading="lazy"
            alt=""
            src="/typedefault-componentavatar.svg"
          />
          <div className={styles.autoLayoutVertical}>
            <div className={styles.welcomeBack}>Welcome back 👋</div>
            <b className={styles.andrewAinsley}>Andrew Ainsley</b>
          </div>
        </div>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame@2x.png"
        />
      </div>
    </header>
  );
};

export default FrameComponent3;
