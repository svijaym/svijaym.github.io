import styles from "./Project.module.css";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/Link";
import { Fade } from "react-awesome-reveal";
export function ProjectCard({ name, img, git, link, stacks, about }) {
  return (
    <>
      <div className={styles.projectCont}>
        <img src={img} alt="" className={styles.image} />
        <p
          style={{
            color: "#ff6225",
            fontSize: "25px",
            fontWeight: "400",
            margin: "5px 0 0 0",
          }}
        >
          {name}
        </p>
        <div className={styles.stacksDiv2}>{stacks.map((stack) => stack)}</div>

        <div className={styles.linkCont}>
          <a href={git} rel="noreferrer" target="_blank">
            <div className={styles.linkDiv}>
              <GitHubIcon />
              <p>Code</p>
            </div>
          </a>
          <div className={styles.stacksDiv}>{stacks.map((stack) => stack)}</div>

          <a href={link} rel="noreferrer" target="_blank">
            <div className={styles.linkDiv}>
              <LinkIcon />
              <p>Demo</p>
            </div>
          </a>
        </div>

        <div className={styles.projInfo}>
          <Fade bottom>
            <p>{about}</p>
          </Fade>
        </div>
      </div>
    </>
  );
}
