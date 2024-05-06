import { Button } from "@mui/material";
import styles from "./AutoLayoutVertical.module.css";
import { useState } from "react";

const AutoLayoutVertical = ({ overviewShown, toggleOverview }) => {
  return (
    <div className={styles.autoLayoutVertical}>
      <div className={styles.statefilledDarktrueCompo}>
        <header className={styles.autoLayoutHorizontal}>
          <div className={styles.autoLayoutHorizontal1}>
            <b className={styles.clip1}>clip1</b>
          </div>
          <div className={styles.autoLayoutHorizontal2}>
            <div style={{ display: "flex", gap: "var(--gap-xs)" }}>
              <Button
                className={styles.autoLayoutVertical1}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#35383f",
                  borderRadius: "100px",
                  "&:hover": { background: "#35383f" },
                  height: 39,
                  width: 120,
                  fontWeight: 550
                }}
              >
                right hand
              </Button>
              <Button
                className={styles.autoLayoutVertical1}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#235dff",
                  borderRadius: "100px",
                  "&:hover": { background: "#235dff" },
                  height: 39,
                  fontWeight: 550
                }}
              >excellent</Button>
            </div>
            <img
              className={styles.iconellipsisVComponentadd}
              loading="lazy"
              alt=""
              src="/iconellipsisv-componentadditional-icons.svg"
            />
          </div>
        </header>
        <div className={styles.autoLayoutVertical3}>
          <img
            className={styles.darktrueComponentdividerIcon}
            loading="lazy"
            alt=""
            src="/darktrue-componentdivider.svg"
          />
          <div className={styles.autoLayoutHorizontal3}>
            <div className={styles.autoLayoutVertical4}>
              <img
                className={styles.iconsceneComponentaddition}
                loading="lazy"
                alt=""
                src="/iconscene-componentadditional-icons1.svg"
              />
              <b className={styles.d}>3D</b>
            </div>
            <div onClick={toggleOverview}>
              {overviewShown ?
                <div className={styles.autoLayoutVertical5}>
                  <img
                    className={styles.iconaspectRatio2Component}
                    loading="lazy"
                    alt=""
                    src="/iconaspectratio2-componentadditional-icons.svg"
                  />
                  <div className={styles.analysis}>Analysis</div>
                </div>
                :
                <div className={styles.autoLayoutVertical5}>
                  <img
                    className={styles.iconaspectRatio2Component}
                    loading="lazy"
                    alt=""
                    src="/iconaspectratio2-componentadditional-icons.svg"
                  />
                  <div className={styles.analysis}>Overview</div>
                </div>
              }
            </div>
            <div className={styles.autoLayoutVertical6}>
              <img
                className={styles.iconlyregularoutlinescan}
                loading="lazy"
                alt=""
                src="/iconlyregularoutlinescan.svg"
              />
              <b className={styles.d1}>2D</b>
            </div>
            <div className={styles.autoLayoutVertical7}>
              <img
                className={styles.iconlyregularoutlinevoice}
                alt=""
                src="/iconlyregularoutlinevoice@2x.png"
              />
              <div className={styles.voice}>Voice</div>
            </div>
            <div className={styles.autoLayoutVertical8}>
              <img
                className={styles.iconlyregularoutlineimage3}
                alt=""
                src="/iconlyregularoutlineimage-3@2x.png"
              />
              <div className={styles.backgro}>Backgro...</div>
            </div>
            <div className={styles.autoLayoutVertical9}>
              <img
                className={styles.iconmusic2Componentadditi}
                alt=""
                src="/iconmusic2-componentadditional-icons1.svg"
              />
              <div className={styles.music}>Music</div>
            </div>
          </div>
          <img
            className={styles.emptyIcon}
            loading="lazy"
            alt=""
            src="/frame4@2x.png"
          />
          <img
            className={styles.darktrueComponentdividerIcon1}
            alt=""
            src="/darktrue-componentdivider.svg"
          />
          <div className={styles.autoLayoutVertical10}>
            <div className={styles.autoLayoutHorizontal4}>
              <div className={styles.script}>Script</div>
              <div className={styles.autoLayoutVertical11}>
                <div className={styles.autoLayoutHorizontal5}>
                  <img
                    className={styles.iconplayFilledComponentad}
                    alt=""
                    src="/iconplayfilled-componentadditional-icons1.svg"
                  />
                  <div className={styles.div}>00:00 / 02:30</div>
                </div>
              </div>
            </div>
            <div className={styles.inputFormtextAreaStatefi}>
              <div className={styles.label}>Label</div>
              <div className={styles.autoLayoutHorizontal6}>
                <div className={styles.loremIpsum}>
                  <p
                    className={styles.artificialIntelligenceAi}
                  >{`Artificial Intelligence (AI) has rapidly become one of the most transformative and disruptive technologies of our time. `}</p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p
                    className={styles.fromAutonomousVehicles}
                  >{`From autonomous vehicles to voice assistants and personalized recommendations, AI is reshaping industries and revolutionizing the way we live and work. `}</p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.asWeLook}>
                    As we look ahead, it is clear that the future of artificial
                    intelligence holds tremendous potential for further
                    advancements and impact across various domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLayoutVertical;
