import styles from "./About.module.css";
import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <Text color={"#383874"} fontSize={{ base: "xl", md: "3xl" }}>
          About
        </Text>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="https://user-images.githubusercontent.com/101625055/200088157-840f9dac-62b1-4829-a1bb-b3ebe450b90d.jpg"
              alt=""
              className={styles.profilePic}
            />
          </div>
          <div>
            {/* <h2>
              I am <span>S Vijayaprasad</span>
            </h2> */}
            <Text fontSize='2xl'>
              I am S Vijayaprasad, I am a Full stack web developer(MERN)
              upskilled by Masai School. I did my graduation in Mechanical
              Engineering from VTU Belagavi. Also Qualified in GATE examination
              held by IIT Bombay during 2021, after graduation I have done jobs
              in various domains for about two years.
            </Text>
          </div>
        </div>
      </Fade>
    </div>
  );
}
