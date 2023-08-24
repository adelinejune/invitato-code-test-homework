import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Spacer,
  calc,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import AnimatedTextBox from "./AnimatedTextBox";
import { motion } from "framer-motion";
import BirdIcon from "./icon/BirdIcon";
import MailIcon from "./icon/MailIcon";
import LoveIcon from "./icon/LoveIcon";

const CoverRightSection = forwardRef(({ handleOpenInvitation }, ref) => {
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
    <Box ref={ref}>
      <Box
        h="calc(100vh - 100px)"
        bgImage="url('https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Flex
          bg="main.100"
          h="100%"
          align={"center"}
          flexDirection={"column"}
          color={"white"}
          pt={"15%"}
        >
          <AnimatedTextBox>
            <BirdIcon />
          </AnimatedTextBox>
          <AnimatedTextBox>
            <Text
              textTransform={"uppercase"}
              fontSize={"14px"}
              fontWeight={300}
              mb={"8px"}
              mt={"12px"}
            >
              The Wedding of
            </Text>
          </AnimatedTextBox>
          <AnimatedTextBox>
            <Heading>Nailal & Via</Heading>
          </AnimatedTextBox>
          <Spacer></Spacer>
          <motion.div animate={zoom}>
            <Button
              onClick={handleOpenInvitation}
              sx={buttonStyle}
              _hover={{ bg: "blackAlpha.600" }}
            >
              <span className="chakra-button__icon css-1wh2kri">
                <MailIcon />
              </span>
              Open Invitation
            </Button>
          </motion.div>
        </Flex>
      </Box>
      <Box color={"white"} textAlign={"center"} height={"100px"}>
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

        <Text display={"flex"} alignItems={"center"} justifyContent={"center"}>
          Created with
          <LoveIcon />
          by Invitato
        </Text>
        <Text>© 2023 Nailal & Via. All Rights Reserved</Text>
      </Box>
    </Box>
  );
});

export default CoverRightSection;
