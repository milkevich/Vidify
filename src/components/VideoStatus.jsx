import styles from "./VideoStatus.module.css";

const VideoStatus = () => {
  return (
    <section className={styles.videoStatus}>
      <header className={styles.typestatusBarThemedarkC}>
        <div className={styles.div}>9:41</div>
        <div className={styles.typestatusBarThemedarkCInner}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group@2x.png"
              />
            </div>
            <div className={styles.groupContainer}>
              <img className={styles.groupIcon1} alt="" src="/group-1@2x.png" />
            </div>
            <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
          </div>
        </div>
      </header>
      <div className={styles.navbardefaultDarktrueComWrapper}>
        <div className={styles.navbardefaultDarktrueCom}>
          <div className={styles.autoLayoutHorizontal}>
            <img
              className={styles.typelogoDefaultComponentl}
              alt=""
              src="/typelogo-default-componentlogo.svg"
            />
            <img
              className={styles.icontimesComponentaddition}
              loading="lazy"
              alt=""
              src="/icontimes-componentadditional-icons.svg"
            />
          </div>
          <b className={styles.titleSection}>Select Avatar</b>
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
      </div>
    </section>
  );
};

export default VideoStatus;
