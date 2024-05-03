import { Button } from "@mui/material";
import VideoStatus from "../components/VideoStatus";
import ElementsGenerateVideoComple from "../components/ElementsGenerateVideoComple";
import styles from "./DarkGeneratedAIVideoIsRea.module.css";

const DarkGeneratedAIVideoIsRea = () => {
  return (
    <div className={styles.darkGeneratedAiVideoIsRea}>
      <VideoStatus />
      <section className={styles.elementsgenerateVideoCompleWrapper}>
        <ElementsGenerateVideoComple />
      </section>
      <section className={styles.buttonprimaryDarktrueCom}>
        <Button
          className={styles.buttonpillTypepillIconf}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#235dff",
            borderRadius: "100px",
            "&:hover": { background: "#235dff" },
            height: 58,
          }}
        >
          Download Video
        </Button>
      </section>
    </div>
  );
};

export default DarkGeneratedAIVideoIsRea;
