import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Heading } from "@chakra-ui/react";
const projects = [
  {
    name: "Sugarcosmetics-Clone",
    img: "https://user-images.githubusercontent.com/101625055/200111906-55285552-b0c1-45f5-bac2-f5958777a461.png",
    link: "https://sugar-cosmetic-lyart.vercel.app/",
    git: "https://github.com/svijaym/Suger-cosmetic-Clone/tree/master",
    about:
      " Sugar-Cosmetics Clone, Clone of E-commerce website which mainly focuses on beauty/cosmetic products",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "Tata_1mg-Clone",
    img: "https://user-images.githubusercontent.com/101625055/200112018-2f7cec10-5dcc-4539-b89e-8070c954d3bc.png",
    link: "https://resonant-pavlova-516e1c.netlify.app/",
    git: "https://github.com/svijaym/Tata1-Mg-clone/tree/master",
    about:
      "A clone of the healthcare platform. It provides services, including e-pharmacy, diagnostics, e-consultation and health content",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Envoy-Clone",
    img: "https://user-images.githubusercontent.com/101625055/200118065-2b29e269-2e2a-402e-a490-c6600e4cb69e.png",
    link: "https://envoy-clone.vercel.app/",
    git: "https://github.com/svijaym/Envoy-Clone/tree/master",
    about:
      "This is clone of envoy.com website, which mainly focusses to Improve workplace experiences with Envoy visitor management, employee sign in, desk reservations, room booking, and delivery management software. ",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "Mentimeter-Clone",
    img: "https://user-images.githubusercontent.com/101625055/200118139-f615ff72-ee23-4c4d-95d5-53836ced9d23.png",
    link: "https://mentimeter-clone-pi.vercel.app/",
    git: "https://github.com/svijaym/Mentimeter-Clone/tree/master",
    about:
      "This is clone of mentimeter website , Mentimeter is a website that develops and maintains an eponymous app used to create presentations with real-time feedback.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <Heading as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8} color='#322659'>
          Projects
        </Heading>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
