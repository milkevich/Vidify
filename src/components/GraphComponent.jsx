import { useMemo } from "react";
import styles from "./GraphComponent.module.css";
import { Line, LineChart } from "recharts";

const GraphComponent = ({
  propHeight,
  propBottom,
  propHeight1,
  propWidth,
  propRight,
  propBottom1,
  propHeight2,
  propWidth1,
  propRight1,
  propBottom2,
  propHeight3,
  propPadding,
}) => {
  const chartBarsStyle = useMemo(() => {
    return {
      height: propHeight,
      bottom: propBottom,
      borderRadius: "10px"
    };
  }, [propHeight, propBottom]);

  const leftBarStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
      right: propRight,
      bottom: propBottom1,
      borderRadius: "10px"
    };
  }, [propHeight1, propWidth, propRight, propBottom1]);

  const rightBarStyle = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth1,
      right: propRight1,
      bottom: propBottom2,
      borderRadius: "10px"
    };
  }, [propHeight2, propWidth1, propRight1, propBottom2]);

  const chartLabelsStyle = useMemo(() => {
    return {
      height: propHeight3,
      padding: propPadding,
    };
  }, [propHeight3, propPadding]);

  //fake data, fetch data later!!!
  const data = [
    { pro: 0, you: 0 },
    { pro: 33, you: 50 },
    { pro: 79, you: 40 },
    { pro: 34, you: 40 },
    { pro: 34, you: 15 },
    { pro: 11, you: 10 },
  ];

  return (
    <div className={styles.graphComponent}>
      <div className={styles.chartBars} style={chartBarsStyle}>
        <div className={styles.leftBar} style={leftBarStyle} />
        <div className={styles.rightBar} style={rightBarStyle} />
      </div>
      <div className={styles.chartLabels} style={chartLabelsStyle}>
        <div className={styles.hipsRotation}>Hips rotation</div>
        <div className={styles.chartScore}>
          <div className={styles.scoreContainer}>
            <div className={styles.scoreBackground} />
            <div className={styles.perfectWrapper}>
              <b className={styles.perfect}>PERFECT</b>
            </div>
          </div>
        </div>
      </div>
      <div style={{ zIndex: "100000000000" }}>
        <LineChart width={270} height={90} data={data}>
          <Line strokeWidth={3} type="monotone" dataKey="pro" stroke="#0040FF" dot={false} />
          <Line strokeWidth={3} type="monotone" dataKey="you" stroke="#FF0000" dot={false} />
        </LineChart>
      </div>
    </div>
  );
};

export default GraphComponent;
