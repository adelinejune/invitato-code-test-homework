import { Box, Text, Heading, calc } from "@chakra-ui/react";
import AnimatedTextBox from "./AnimatedTextBox";

export default function CoverLeftSection() {
  return (
    <Box
      bg="main.100"
      h="100vh"
      p="42px"
      color={"text.400"}
      borderRight={"8px"}
      borderRightColor={"blackAlpha.400"}
    >
      <AnimatedTextBox>
        <Text
          as={"p"}
          letterSpacing={"2px"}
          fontSize={"md"}
          fontWeight={300}
          textTransform={"uppercase"}
        >
          The Wedding Of
        </Text>
      </AnimatedTextBox>
      <AnimatedTextBox>
        <Heading
          as={"h1"}
          fontSize={"7xl"}
          fontWeight={400}
          mb={"32px"}
          mt={"32px"}
        >
          Nailal & Via
        </Heading>
      </AnimatedTextBox>
      <AnimatedTextBox>
        <Text
          letterSpacing={"1px"}
          as={"p"}
          maxWidth={"500px"}
          fontStyle={"italic"}
          fontWeight={300}
        >
          “And I knew exactly how old Walt Disney’s Cinderella felt when she
          found her prince.” <br></br>— Elizabeth Young
        </Text>
      </AnimatedTextBox>
    </Box>
  );
}
