import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import styles from "./Hero.module.css";
export default function SplitScreen() {
  return (
    <div id="hero">
      {/* style={{ backgroundColor: "#edf2f8" }} */}
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack
            spacing={{ base: "4", md: "5" }}
            w={"full"}
            maxW={"lg"}
            textAlign={{ base: "center", md: "start" }}
          >
            <Box
              margin={{ base: "auto", md: "0" }}
              display="flex"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Hi{" "}
              <Image
                width="50px"
                style={{ marginLeft: "6px" }}
                src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                alt="hand waveing"
              />
              ,
            </Box>
            <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              I'm{" "}
              <Text
                fontWeight="bold"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              >
                S Vijayaprasad{" "}
              </Text>{" "}
            </Text>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text className={styles.Subhead}>A Full Stack Web Developer</Text>
            </Heading>
            <Box>
              <a href="S Vijayaprasad Resume.pdf" download>
                <button
                  style={{
                    backgroundColor: "#ff6326",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Resume
                </button>
              </a>
            </Box>
          </Stack>
        </Flex>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Box w="100%" margin={{ base: "auto", md: "0", sm: "100" }}>
            <Image
              // alt={"Login Image"}
              // objectFit={"cover"}
              // w="100%"
              marginTop="20px"
              boxSize="500px"
              borderRadius="2%"
              src={
                "https://user-images.githubusercontent.com/101625055/207065407-d7b1f180-46b5-4cac-9b93-d8e6998d6424.jpeg"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </div>
  );
}
// https://user-images.githubusercontent.com/101625055/200088157-840f9dac-62b1-4829-a1bb-b3ebe450b90d.jpg
