import styles from "./ElementsGenerateVideoComple.module.css";

const ElementsGenerateVideoComple = () => {
  return (
    <div className={styles.elementsgenerateVideoComple}>
      <div className={styles.iconlysharpboldtickSquareWrapper}>
        <img
          className={styles.iconlysharpboldtickSquare}
          loading="lazy"
          alt=""
          src="/iconlysharpboldtick-square.svg"
        />
      </div>
      <h3 className={styles.yourAiVideo}>Your AI Video is Ready!</h3>
      <div className={styles.sceneSettings}>
        <img
          className={styles.scene18Ratio169Select}
          alt=""
          src="/scene18-ratio16--9-selectedfalse-componentbackground-images@2x.png"
        />
        <div className={styles.rectangle} />
        <div className={styles.genderwomanAvatar15WomanParent}>
          <img
            className={styles.genderwomanAvatar15Woman}
            alt=""
            src="/genderwoman-avatar15-woman-componentavatar@2x.png"
          />
          <div className={styles.autoLayoutHorizontal}>
            <img
              className={styles.iconplayFilledComponentad}
              loading="lazy"
              alt=""
              src="/iconplayfilled-componentadditional-icons.svg"
            />
          </div>
        </div>
        <div className={styles.autoLayoutHorizontalWrapper}>
          <div className={styles.autoLayoutHorizontal1}>
            <div className={styles.div}>02:30</div>
          </div>
        </div>
      </div>
      <div className={styles.nowYouCan}>
        Now you can make AI Videos easily and quickly. Check out our pro
        features to get all the benefits without any limitations.
      </div>
    </div>
  );
};

export default ElementsGenerateVideoComple;
