import { Button } from "@mui/material";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.elementsupgradeToProBannerWrapper}>
      <div className={styles.elementsupgradeToProBanner}>
        <img
          className={styles.autoLayoutVertical}
          alt=""
          src="/auto-layout-vertical@2x.png"
        />
        <div className={styles.rectangle} />
        <div className={styles.autoLayoutVertical1}>
          <div className={styles.autoLayoutVertical2}>
            <b className={styles.upgradeToPro}>Upgrade to Pro!</b>
            <div className={styles.enjoyAllBenefits}>
              Enjoy all benefits without any restrictions
            </div>
          </div>
          <Button
            className={styles.sizesmallTypefilledIcon}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#235dff",
              fontSize: "14",
              background: "#fff",
              borderRadius: "100px",
              "&:hover": { background: "#fff" },
              width: 89,
              height: 34,
            }}
          >
            Upgrade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
