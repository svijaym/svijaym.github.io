import styles from "./About.module.css";
import { Fade } from "react-awesome-reveal";
import { Heading, Text } from "@chakra-ui/react";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <Heading fontSize={{ base: "xl", md: "3xl" }} color="#322659">
          About
        </Heading>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="https://user-images.githubusercontent.com/101625055/207110262-745a5248-43d1-446b-9863-f8e74c1aba8f.jpeg"
              alt="vp"
              className={styles.profilePic}
            />
          </div>
          <div>
            {/* <h2>
              I am <span>S Vijayaprasad</span>
            </h2> */}
            <Text
              fontSize={{ sm: "25px", md: "30px", lg: "35px" }}
              textAlign="center"
            >
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
