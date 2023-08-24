import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  calc,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import AnimatedTextBox from "./AnimatedTextBox";

const WelcomeSection = forwardRef((props, ref) => {
  const buttonStyle = {
    mb: "10vh",
    backgroundColor: "main.200",
    color: "white",
    display: "inline-flex",
    borderRadius: "5rem",
    gap: "10px",
    fontSize: "sm",
    whiteSpace: "nowrap",
  };

  const zoom = {
    scale: [1, 1.1, 1], // Define the zoom in and out scale
    transition: {
      duration: 2, // Animation duration
      repeat: Infinity, // Repeat the animation infinitely
    },
  };

  return (
    <Box ref={ref} display={"none"}>
      <Box
        h="calc(100vh - 200px)"
        bgImage="url('https://user-images.githubusercontent.com/10141928/147430937-dc4f7649-2190-4568-b503-1ead665c1c5c.jpeg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box h={"100%"} bg={"main.100"}></Box>
      </Box>
      <Box color={"white"} textAlign={"center"} height={"200px"}>
        <Box transform="translateY(-38px)" height={"15px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="49px"
            viewBox="0 0 1280 140"
            preserveAspectRatio="none"
          >
            <g fill="#b4c5d5">
              <path
                d="M1280 3.4C1050.59 18 1019.4 84.89 734.42 84.89c-320 0-320-84.3-640-84.3C59.4.59 28.2 1.6 0 3.4V140h1280z"
                fillOpacity=".3"
              />
              <path
                d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V140H0z"
                fillOpacity=".5"
              />
              <path d="M1280 51.76c-201 12.49-242.43 53.4-513.58 53.4-320 0-320-57-640-57-48.85.01-90.21 1.35-126.42 3.6V140h1280z" />
            </g>
          </svg>
        </Box>
        <Box padding={"16px"}>
          <Heading fontSize={"xl"} marginBottom={"2"}>
            Dear Mr/Mrs/Ms.
          </Heading>
          <Heading fontSize={"xl"} marginBottom={"2"}>
            Family & Friend
          </Heading>
          <Text fontSize={"sm"}>
            We are pleased to announce and invite you to our wedding. We
            sincerely hope that you will be able to attend and pray directly on
            our wedding day. Your presence will mean a lot to us.
          </Text>
        </Box>
      </Box>
    </Box>
  );
});

export default WelcomeSection;
