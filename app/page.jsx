"use client";
import { useState, useRef } from "react";

import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import CoverLeftSection from "./components/CoverLeftSection";
import CoverRightSection from "./components/CoverRightSection";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef(null);

  const welcomingSectionRef = useRef(null);
  const coverRightSectionRef = useRef(null);
  const whiteBoxRef = useRef(null);

  const handleOpenInvitation = () => {
    setInvitationOpened(true);

    welcomingSectionRef.current.style.display = "block";

    whiteBoxRef.current.style.display = "block";

    // Scroll to the Welcoming Section smoothly
    const targetY =
      welcomingSectionRef.current.getBoundingClientRect().top + window.scrollY;
    const startingY = window.scrollY;
    const duration = 1000; // 2 seconds
    const startTime = performance.now();

    function step(currentTime) {
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        window.scrollTo(
          0,
          easeInOutQuad(elapsedTime, startingY, targetY - startingY, duration)
        );
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        coverRightSectionRef.current.style.display = "none";
        whiteBoxRef.current.style.display = "none";
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(step);

    // Play audio when invitation is opened
    if (!isAudioPlaying) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  return (
    <Grid templateColumns={{ lg: "1fr 500px" }}>
      {/* Left Side */}
      <GridItem>
        <Box
          bg="white"
          bgImage="url('https://user-images.githubusercontent.com/10141928/147430939-8124ff5c-4df1-495f-a4f9-ee6eb839f03e.jpeg')"
          bgSize="cover"
          bgPosition="center"
          display={{ base: "none", md: "none", lg: "block" }} // Hide on screens below 1029px
          height={"100vh"}
          position={"fixed"}
          top={"0"}
          width="calc(100% - 500px)"
        >
          <CoverLeftSection />
        </Box>
      </GridItem>

      {/* Right side */}
      <GridItem>
        <Box
          bg="main.400"
          w={{ base: "100%", md: "500px", lg: "500px" }} // Width is 500px when screen width is 1029px and above
          bgImage="url('/path/to/right-side-background.jpg')" // Replace with your image path
          bgSize="cover"
          bgPosition="center" // White background at 800px and above
          mx="auto"
          minHeight={"100vh"}
          overflowY="auto"
        >
          <CoverRightSection
            ref={coverRightSectionRef}
            handleOpenInvitation={handleOpenInvitation}
          />
          <Box
            ref={whiteBoxRef}
            bg={"white"}
            height={"100vh"}
            display={"none"}
          ></Box>
          <WelcomeSection ref={welcomingSectionRef} />
        </Box>
        <audio ref={audioRef} loop className="hide">
          <source
            src="https://invitato.net/template-nailalvia/static/bg-sound-946cc5b0fbb9759746fce004461e52cc.mp3"
            type="audio/mpeg"
          />
        </audio>
      </GridItem>
    </Grid>
  );
}
