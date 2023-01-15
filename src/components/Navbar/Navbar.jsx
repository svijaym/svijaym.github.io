import { Link } from "react-scroll";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Reload = () => {
    window.location.reload();
  };

  return (
    <>
      <Box bg="#322659" px={4} className={styles.mainBox}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon color="#322659" />
              ) : (
                <HamburgerIcon color="#322659" />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            justifyContent={{ base: "center", md: "space-between" }}
            w={"100%"}
            p={4}
            spacing={8}
            alignItems={"center"}
          >
            <Box>
              <Avatar
                onClick={Reload}
                boxSize={["10", "12", "14", "16"]}
                borderRadius="full"
                className={styles.myLogo}
                size={"md"}
                src="vlogo.jpg"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Home</div>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>About Me</div>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Skills</div>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Projects</div>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Contact</div>
              </Link>

              <a
                href="https://drive.google.com/file/d/1_05jXn5Hx5OGJulyb-gY5zBnaQTdh81S/view?usp=sharing"
                target="blank"
              >
                <button
                  style={{
                    backgroundColor: "#ff6326",
                    border: "none",
                    borderRadius: "10px",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  Resume
                </button>
              </a>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Home</div>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>About Me</div>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Skills</div>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Projects</div>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <div className={styles.nav}>Contact</div>
              </Link>
              <div className={styles.nav}>
                <a href="S Vijayaprasad Resume.pdf" download>
                  <button
                    style={{
                      backgroundColor: "#ff6326",
                      border: "none",
                      borderRadius: "10px",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    Resume
                  </button>
                </a>
              </div>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
