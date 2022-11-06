import { Box, Text } from "@chakra-ui/react";
import styles from "./SkillCard.module.css";

export function SkillCard({ skill, icon }) {
  return (
    <Box className={styles.card}>
      {icon}

      <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>
        {skill}
      </Text>
    </Box>
  );
}
