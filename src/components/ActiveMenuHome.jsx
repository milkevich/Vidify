import styles from "./ActiveMenuHome.module.css";

const ActiveMenuHome = () => {
  return (
    <div className={styles.activeMenuhomeDarktrueC}>
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.autoLayoutVertical}>
          <img
            className={styles.iconlycurvedboldhome}
            loading="lazy"
            alt=""
            src="/iconlycurvedboldhome.svg"
          />
          <b className={styles.home}>Home</b>
        </div>
        <div className={styles.autoLayoutVertical1}>
          <img
            className={styles.iconlycurvedlightcategory}
            loading="lazy"
            alt=""
            src="/iconlycurvedlightcategory.svg"
          />
          <div className={styles.files}>Library</div>
        </div>
        <div className={styles.buttonpillTypeiconIcont}>
          <img
            className={styles.iconplusComponentadditiona}
            loading="lazy"
            alt=""
            src="/iconplus-componentadditional-icons.svg"
          />
          <div className={styles.text}>Text</div>
        </div>
        <div className={styles.autoLayoutVertical2}>
          <img
            className={styles.iconlyregularoutlineheart}
            loading="lazy"
            alt=""
            src="/iconlyregularoutlineheart@2x.png"
          />
          <div className={styles.account}>Favorite</div>
        </div>
        <div className={styles.autoLayoutVertical3}>
          <img
            className={styles.iconlyregularoutlineprofile}
            loading="lazy"
            alt=""
            src="/iconlyregularoutlineprofile.svg"
          />
          <div className={styles.account1}>Account</div>
        </div>
      </div>
    </div>
  );
};

export default ActiveMenuHome;
