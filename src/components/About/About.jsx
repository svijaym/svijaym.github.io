import styles from "./About.module.css";
import { Fade } from "react-awesome-reveal";
import { Heading, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        {/* fontSize={{ base: "3xl", md: "2xl" }} */}
        <Heading color="#322659">About Me</Heading>
        <br />
        <div className={styles.mainCont}>
          <div>
            <img
              src="https://user-images.githubusercontent.com/101625055/207110262-745a5248-43d1-446b-9863-f8e74c1aba8f.jpeg"
              alt="vp"
              className={styles.profilePic}
            />
          </div>
          <div>
            <Text
              fontSize={{ sm: "20px", md: "25px", lg: "30px" }}
              textAlign="justify"
              fontFamily="sans-serif"
            >
              I am S Vijayaprasad, a Full stack web developer(MERN) upskilled by
              Masai School. I did my graduation in Mechanical Engineering from
              VTU Belagavi. Also Qualified in GATE examination held by IIT
              Bombay during 2021, after graduation I have done jobs in Non-IT
              domains for about two years.
            </Text>
          </div>
        </div>
      </Fade>
    </div>
  );
}
